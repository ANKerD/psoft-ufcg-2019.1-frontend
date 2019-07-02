import { AuthService } from "./services/auth.js";
import * as utils from './utils/perfilUtils.js';
import '../components/Comment.js';
import { http } from "./utils/http.js";
import { api_endpoint, userTokenPath } from '../config.js';

//Redireciona usuários não logados
if (!AuthService.isLoggedIn()) { window.location.href = "./"; }

const token = localStorage.getItem(userTokenPath);

http.addHeader("Authorization", "Bearer " + token);

let profileData = null;
let replyingComment = null;

const fillProfile = () => {
    fillProfileName(profileData.name);
    fillLikesBox(profileData.usersLiked, profileData.liked);
    fillComments(profileData.comments);
}

const fillProfileName = name => {
    subjectName.innerHTML = name;
}

const fillLikesBox = (count, liked) => {
    numberOfLikes.innerHTML = count;

    if (liked) 
        likeBox.classList.add('liked');
    else 
        likeBox.classList.remove('liked');
}

const fillComments = (comments) => {
    const $comments = document.querySelector('#comments');
    while ($comments.firstChild) {
        $comments.removeChild($comments.firstChild);
    }
    comments.forEach(comment => {
        const element = createCommentElement(comment);
        $comments.append(element);
    });
}

const toggleLike = () => {
    const id = profileData.id;
    const likeEndpoint = `${api_endpoint}/subjectsProfile/${id}/like`;
    
    if (profileData.liked) {
        http.delete(likeEndpoint);
        --profileData.usersLiked;
    } else {
        http.post(likeEndpoint);
        ++profileData.usersLiked;
    }
    
    profileData.liked = !profileData.liked;
    fillLikesBox(profileData.usersLiked, profileData.liked);
}

const getCommentById = id => {
    return profileData.comments.find(
        comment => comment.id == id
    );
}

const setReplying = reply => {
    replyingComment = reply;
    if (reply == null) {
        replyToBox.classList.remove('show');
    } else {
        const comment = getCommentById(reply);
        replyToBox.classList.add('show');
        replyToName.innerHTML = comment.authorName;
    }
};

const postComment = async (id) => {
    //Cria novo comentário (resposta ou não)
    let content = commentInput.value;
    if (!content) return;
    
    let ret = await http.post(`${api_endpoint}/subjectsProfile/${id}/comment`, {
        content: content,
        answerTo: replyingComment
    })
    .then(res => res.json());

    commentInput.value = '';
    setReplying(null);
    
    profileData.comments.push(ret);
    
    fillComments(profileData.comments);
    utils.goToTheBottom();
}

const getCommentAuthor = id => {
    let comment = getCommentById(id);
    return comment ? comment.authorName : '';
}

const deleteComment = async commentId => {
    const profileId = profileData.id;
    await http.delete(`${api_endpoint}/subjectsProfile/${profileId}/comment/${commentId}`);
    profileData.comments.forEach(element => {
        if (element.id == commentId) {
            element.content = '';
            element.active = false;
        }
    });
    fillComments(profileData.comments);
}

document.addEventListener('DOMContentLoaded', async ev => {
    const id = (new URL(window.location.href)).searchParams.get("id");
    
    removereplyToName.addEventListener('click', () => setReplying(null));   
    commentIcon.addEventListener('click', () => postComment(id));
    commentInput.addEventListener('keydown', event => {
        if (event.key == 'Enter') {
            postComment(id);
        }
    });

    likeBox.addEventListener('click', toggleLike);

    let res = await http.get(`${api_endpoint}/subjectsProfile/${id}`);
    profileData = await res.json();
    fillProfile();
})

window.addEventListener('goComment', ev => {
    utils.goToComment(ev.detail.targetComment)
});

window.addEventListener('selectCommentToReply', ev => {
    utils.goToCommentBox();
    setReplying(ev.detail.commentId);
}); 

window.addEventListener('deleteComment', ev => {
    deleteComment(event.detail.commentId);
}); 

const createCommentElement = (data) => {
    let newElem = document.createElement("comment-comp");
    newElem.setAttribute('id', `comment-${data.id}`);
    newElem.setAttribute('data-id', data.id);
    newElem.setAttribute('data-content', data.content);
    newElem.setAttribute('data-active', data.active);
    newElem.setAttribute('data-author', data.authorName);

    data.itsMine && newElem.classList.add('itsMine');
    !data.active && newElem.classList.add('deleted');
    
    if (data.answerTo != null) {
        let authorAnswer = getCommentAuthor(data.answerTo)
        newElem.setAttribute('data-answer-id', data.answerTo);
        newElem.setAttribute('data-answer-author', authorAnswer);
    }

    return newElem;
}
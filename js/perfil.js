import { AuthService } from "./services/auth.js";
import * as utils from './utils/perfilUtils.js';
import '../components/Comment.js';
import { http } from "./utils/http.js";
import { api_endpoint, userTokenPath } from '../config.js';

//Redireciona usuários não logados
if (!AuthService.isLoggedIn()) { window.location.href = "./"; }

let profileData = null;

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

    if (liked) {
        likeBox.classList.add('liked');
    }
}

const fillComments = (comments) => {
    const $comments = document.querySelector('#comments');
    comments.forEach(comment => {
        const element = createCommentElement(comment);
        $comments.append(element);
    });
}

const toggleLike = () => {
    //Manda like para o back
    //Atualiza contagem de likes
}

const postComment = (content) => {
    //Cria novo comentário (resposta ou não)
    //Atualiza comentários
}

const getCommentAuthor = id => {
    let comment = profileData.comments.find(
        comment => comment.id == id
    );
    return comment ? comment.authorName : '';
}

document.addEventListener('DOMContentLoaded', async ev => {
    let id = (new URL(window.location.href)).searchParams.get("id");
    
    commentIcon.addEventListener('click', event => {
        console.log(event);
        // postComment
    });
    let res = await http.get(`${api_endpoint}/subjectsProfile/${id}`);
    profileData = await res.json();
    fillProfile();
})

window.addEventListener('goComment', ev => {
    utils.goToComment(ev.detail.targetComment)
    console.log(ev.detail.targetComment);
    console.log(ev);
})


const createCommentElement = (data) => {
    let newElem = document.createElement("comment-comp");
    newElem.setAttribute('id', `comment-${data.id}`);
    newElem.setAttribute('data-id', data.id);
    newElem.setAttribute('data-content', data.content);
    newElem.setAttribute('data-active', data.active);
    newElem.setAttribute('data-author', data.authorName);
    
    if (data.answerTo != null) {
        let authorAnswer = getCommentAuthor(data.answerTo)
        newElem.setAttribute('data-answer-id', data.answerTo);
        newElem.setAttribute('data-answer-author', authorAnswer);
    }
    return newElem;
}
import { SubjectsService } from  '../services/subjects.js';

const goToComment = id => {
    document.querySelector(`#comment-${id}`).scrollIntoView({ 
        behavior: 'smooth'
    });
}

const goToCommentBox = () => {
    document.querySelector(`#commentBox`).scrollIntoView({ 
        behavior: 'smooth'
    });
    document.querySelector(`#commentInput`).select();
}

const goToTheBottom = () => {
    window.scrollBy({
        top: document.body.offsetHeight,
        behavior: 'smooth'
    });
}

const searchSubjects = async (event, callback) => {
    if (event) {
        if (event.type == 'click') {
            console.log("prevent");
            event.stopPropagation();
            event.preventDefault();
        }

        if (event.type == 'keydown' && event.key != 'Enter') 
            return;
    }
    // TODO: loading message...
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        callback(subjects);
    })
}

export { goToComment, goToCommentBox, goToTheBottom, searchSubjects }
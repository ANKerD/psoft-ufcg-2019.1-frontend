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
        top: document.body.scrollHeight+2000, 
        behavior: 'smooth'
    });
}

export { goToComment, goToCommentBox, goToTheBottom }
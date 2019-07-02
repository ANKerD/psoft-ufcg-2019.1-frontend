const goToComment = id => {
    document.querySelector(`#comment-${id}`).scrollIntoView({ 
        behavior: 'smooth'
    });
}

const goToCommentBox = () => {
    document.querySelector(`#commentBox`).scrollIntoView({ 
        behavior: 'smooth'
    });
}

export { goToComment, goToCommentBox }
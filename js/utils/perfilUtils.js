const goToComment = (id) => {
    document.querySelector(`#comment-${id}`).scrollIntoView({ 
        behavior: 'smooth'
    });
}

export { goToComment }
const goToComment = (dom, id) => {
    dom.querySelector('#comment-'+id).scrollIntoView({ 
        behavior: 'smooth'
      });
}

export { goToComment }
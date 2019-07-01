const goToComment = (id) => {
    document.querySelector('#'+id).scrollIntoView({ 
        behavior: 'smooth'
      });
}

export { goToComment }
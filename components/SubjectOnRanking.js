class SubjectOnRanking extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/subjectRankComp.css">
            <a href="./perfil.html?id=${this.getAttribute('id')}">
            <div id="subjectBody">
            <h2 id="subjectName">${this.getAttribute('name')}</h2>
            <div id="subjectContent">
            &#128153; <span id="numberOfLikes">${this.getAttribute('likes')}</span>
            &#128172; <span id="numberOfComments">${this.getAttribute('comments')}</span>
            </div>
            </div>
            </a>`;
    }

}

window.customElements.define('subject-rank-comp', SubjectOnRanking);
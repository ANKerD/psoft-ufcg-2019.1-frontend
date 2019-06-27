class Subject extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/subjectComp.css">
            <a href="./perfil.html?id=${this.getAttribute('id')}">
             <h1>${this.getAttribute('id')}</h1>
             <h1>${this.getAttribute('name')}</h1>
            </a>`;
    }
}

window.customElements.define('subject-comp', Subject);
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
            <button id="subject">${this.getAttribute('id')} - ${this.getAttribute('name')}</button>
            </a>`;
    }
}

window.customElements.define('subject-comp', Subject);
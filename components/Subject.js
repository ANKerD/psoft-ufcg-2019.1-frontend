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
             <h1>${this.getAttribute('id')}</h1>
             <h1>${this.getAttribute('name')}</h1>`;
    }
}

window.customElements.define('subject-comp', Subject);
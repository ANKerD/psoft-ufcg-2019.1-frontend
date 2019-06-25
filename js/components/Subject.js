class Subject extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.id = this.getAttribute('id');
        this.name = this.getAttribute('name');
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/subjectComp.css">
             <h1>${this.id}</h1>
             <h1>${this.name}</h1>`;
    }
}

window.customElements.define('subject-comp', Subject);
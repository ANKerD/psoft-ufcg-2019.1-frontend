class SearchResult extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
        this.subjectsRenderization = "";
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/searchResultComp.css">
             <div>${this.subjects}</div>`;
    }
}

window.customElements.define('search-result-comp', SearchResult);
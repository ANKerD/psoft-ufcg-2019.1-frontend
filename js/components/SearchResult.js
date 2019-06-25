class SearchResult extends HTMLElement {

    static get observedAttributes() {
        return ['subjects', 'start'];
    }
    
    constructor() {
        super();
        this.setAttribute('subjects', []);
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // When the drawer is disabled, update keyboard/screen reader behavior.
        if (name === 'subjects') {
            this.setAttribute('start', 0);
            this.render();
        }
        if (name === 'start') {
            this.render();
        }
    }

    prevResults() {
        let start = Number(this.getAttribute('start'));
        this.setAttribute('start', Math.max(0, start - 8));
    }
    
    nextResults() {
        let start = Number(this.getAttribute('start'));
        if (JSON.parse(this.getAttribute('subjects')).length > start + 8) {
            this.setAttribute('start', start + 8);
        }
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/searchResultComp.css">
            <button onclick="searchResult.prevResults()">Disciplinas anteriores</button>
            <div id="resultsList"><h1>Não existem disciplinas que atendem a sua busca</h1></div>
            <button onclick="searchResult.nextResults()">Próximas disciplinas</button>`;
        let subjects = JSON.parse(this.getAttribute('subjects') || '[]');
        // console.log(subjects);
        if (subjects.length > 0) {
            let resultsList = this.$shadow.querySelector('#resultsList');
            resultsList.innerHTML = "";
            for (let i = 0; i < subjects.length; i++) {
                let start = Number(this.getAttribute('start'));
                if (i >= start && i < start + 8) {
                    let newElem = document.createElement("subject-comp");
                    newElem.setAttribute('id', subjects[i].id);
                    newElem.setAttribute('name', subjects[i].name);
                    resultsList.appendChild(newElem);
                }
            }
        }
    }
}

window.customElements.define('search-result-comp', SearchResult);
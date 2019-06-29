class SearchResult extends HTMLElement {

    static get observedAttributes() {
        return ['subjects', 'start'];
    }
    
    constructor() {
        super();
        this.setAttribute('subjects', []);
        this.$shadow = this.attachShadow({"mode": "open"});
        this.$shadow.innerHTML = 
                `<link rel="stylesheet" href="css/searchResultComp.css">
                <button onclick="searchResult.prevResults()">Disciplinas anteriores</button>
                <div id="resultsList"></div>
                <button onclick="searchResult.nextResults()">Próximas disciplinas</button>`;
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // When the drawer is disabled, update keyboard/screen reader behavior.
        if (name === 'subjects') {
            this.render(name);
            this.setAttribute('start', 0);
            
        }
        if (name === 'start') {
            this.render(name);
        }
    }

    prevResults() {
        let start = Number(this.getAttribute('start'));
        this.setAttribute('start', Math.max(0, start - 10));
    }
    
    nextResults() {
        let start = Number(this.getAttribute('start'));
        if (JSON.parse(this.getAttribute('subjects')).length > start + 8) {
            this.setAttribute('start', start + 10);
        }
    }

    render(name) {
        if (name === 'subjects') {
            let resultsList = this.$shadow.querySelector('#resultsList');
            let subjects = JSON.parse(this.getAttribute('subjects') || '[]');
            if (subjects.length > 0) {
                resultsList.innerHTML = "";
                for (let i = 0; i < subjects.length; i++) {
                    let newElem = document.createElement("subject-comp");
                    newElem.setAttribute('id', subjects[i].id);
                    newElem.setAttribute('name', subjects[i].name);
                    resultsList.appendChild(newElem);
                }
            } else {
                resultsList.innerHTML = `<h2>Não existem disciplinas que atendem a sua busca</h2>`;
            }
        } else {
            let c = this.$shadow.querySelector('#resultsList').childNodes;
            let start = Number(this.getAttribute('start'));
            for (let i = 0; i < c.length; i++) {
                if (i < start || i >= start + 10) {c[i].setAttribute("hidden", true);}
                else {c[i].removeAttribute("hidden");}
            }
        }
    }
}

window.customElements.define('search-result-comp', SearchResult);
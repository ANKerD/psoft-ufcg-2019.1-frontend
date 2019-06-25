import { SubjectsService } from "./services/subjects.js";
import './components/SearchResult.js';
import './components/Subject.js';

function fillSearchResult(result) {
    searchResult.subjects = [];
    result.forEach(function (subject) {
        let novo = document.createElement("subject-comp");
        novo.setAttribute('id', subject.id);
        novo.setAttribute('name', subject.nome);
        searchResult.subjects.push(novo);
    });
}

searchButton.onclick = async (event) => {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        // TODO: Criar os webcomponents disciplinas
        console.log(subjects);
        fillSearchResult(subjects);
    })
}

searchButton.onclick();
import { SubjectsService } from "./services/subjects.js";
import './components/SearchResult.js';
import './components/Subject.js';


function fillSearchResult(result) {
    let subjects = [];
    result.forEach((subject) => {
        subjects.push({id: subject.id, name: subject.nome});
    });
    searchResult.setAttribute('subjects', JSON.stringify(subjects));
}

searchButton.onclick = async (event) => {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        // TODO: Criar os webcomponents disciplinas
        fillSearchResult(subjects);
    })
}

searchButton.onclick();
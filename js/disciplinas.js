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


const updateSubjects = async (event) => {
    if (event) {
        event.stopPropagation();
        if (event.type != 'keydown')
            event.preventDefault();
    }
    // TODO: loading message...
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        // TODO: Criar os webcomponents disciplinas
        fillSearchResult(subjects);
        console.log(subjects);
    })
}

searchInput.onkeydown = updateSubjects;
searchButton.onclick = updateSubjects;
searchButton.onclick();
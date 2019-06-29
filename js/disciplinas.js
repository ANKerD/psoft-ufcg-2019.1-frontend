import { SubjectsService } from "./services/subjects.js";
import '../components/SearchResult.js';
import '../components/Subject.js';


const fillSearchResult = (result) => {
    let subjects = [];
    result.forEach((subject) => {
        subjects.push({id: subject.id, name: subject.name});
    });
    searchResult.setAttribute('subjects', JSON.stringify(subjects));
}


const updateSubjects = async (event) => {
    if (event) {
        if (event.type == 'click') {
            console.log("prevent");
            event.stopPropagation();
            event.preventDefault();
        }
    }
    console.log(searchInput.value);
    // TODO: loading message...
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        fillSearchResult(subjects);
        console.log(subjects);
    })
}

searchButton.onclick = updateSubjects;
searchButton.onclick();
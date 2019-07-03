import { SubjectsService } from "./services/subjects.js";
import { AuthService } from "./services/auth.js";
import '../components/SearchResult.js';
import '../components/Subject.js';

if (AuthService.isLoggedIn()) {
    loginLogoutButton.onclick = AuthService.logout;
    loginLogoutButton.innerHTML = "Logout";
} else {
    loginLogoutButton.onclick = () => {
        window.location.href = "./index.html";
    }
}


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

        if (event.type == 'keydown' && event.key != 'Enter') 
            return;
    }
    // TODO: loading message...
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        fillSearchResult(subjects);
    })
}

searchInput.addEventListener('keydown', updateSubjects);
searchButton.onclick = updateSubjects;
searchButton.onclick();

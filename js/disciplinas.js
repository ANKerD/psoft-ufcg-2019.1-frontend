import { SubjectsService } from "./services/subjects.js";
import { AuthService } from "./services/auth.js";
import { searchSubjects } from './utils/perfilUtils.js';
import '../components/SearchResult.js';
import '../components/Subject.js';

if (AuthService.isLoggedIn()) {
    document.querySelector("#navbarList").innerHTML += 
    `<li><a href="./ranking.html">Ranking</a></li>`;
    loginLogoutButton.innerHTML = "Logout";
    loginLogoutButton.onclick = AuthService.logout;
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


const updateSubjects = event => searchSubjects(event, fillSearchResult);

searchInput.addEventListener('keydown', updateSubjects);
searchButton.onclick = updateSubjects;
searchButton.onclick();

import { AuthService } from "./services/auth.js";
import { SubjectsService } from "./services/subjects.js";
import { http } from "./utils/http.js";


let $mainPage = document.querySelector('#main-page');

loginButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    AuthService.authenticate(emailInput.value, passwordInput.value).then( async (token) => {
        // Add the token to all further requests.
        console.log(token);
        http.addHeader("Authorization", "Bearer " + token);
    })
}

signupButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    AuthService.register(emailInput.value, passwordInput.value, firstNameInput.value, lastNameInput.value).then( async (token) => {
        // Add the token to all further requests.
        http.addHeader("Authorization", "Bearer " + token);
    })
}

searchButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    SubjectsService.findBySubstring(searchInput.value).then( async (subjects) => {
        // TODO: Criar os webcomponents disciplinas
        console.log(subjects);
    })
}
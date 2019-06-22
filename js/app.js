import { AuthService } from "./services/login.js";
import { http } from "./services/http.js";

let $loginButton = document.querySelector('#login-button');
let $signupButton = document.querySelector('#signup-button'); 
let $emailInput = document.querySelector('#email');
let $passwordInput = document.querySelector('#password');
let $mainPage = document.querySelector('#main-page');

$loginButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    AuthService.authenticate(email.value, password.value).then( async (token) => {
        // Add the token to all further requests.
        http.addHeader("Authorization", token);
    })
}
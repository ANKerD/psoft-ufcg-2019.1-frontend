import { LoginService } from "./services/login.js";

let $loginButton = document.querySelector('#login-button');
let $signupButton = document.querySelector('#signup-button'); 
let $emailInput = document.querySelector('#email');
let $passwordInput = document.querySelector('#password');
let $mainPage = document.querySelector('#main-page');
let loginService = new LoginService();

$loginButton.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    loginService.authenticate(email.value, password.value).then((response) => {
        if(response.ok) {
            console.log(response);
        } else {
            console.log('Network response was not ok.');
        }
    })
}

//LoginService.authenticate;
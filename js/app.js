import { LoginService } from "./services/login";

$loginButton = document.querySelector('#login-button'); 
$emailInput = document.querySelector('#email');
$passwordInput = document.querySelector('#password');
$mainPage = document.querySelector('#main-page');

const authenticate = (event) => {
    console.log('Hello world', event);
    event.stopPropagation();
    event.preventDefault();
    // let email = $loginForm
    // LoginService.authenticate
};

$loginButton.onClick = authenticate;
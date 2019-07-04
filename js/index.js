import { AuthService } from "./services/auth.js";

if (AuthService.isLoggedIn()) { window.location.href = "./disciplinas.html"; }

const redirect = () => {
    if (AuthService.isLoggedIn()) {
        window.location.href = "./disciplinas.html";
    }
};

const handleLogin = async res => {
    if (res.ok) {
        redirect();
    } else {
        let body = await res.json();
        let errorMsg = body.message;
        window.alert(errorMsg);
    }
};

loginButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    AuthService.authenticate(emailInput.value, passwordInput.value)
    .then(handleLogin);
}

signupButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("registering");
    AuthService.register(emailInput.value, passwordInput.value, firstNameInput.value, lastNameInput.value)
    .then(handleLogin);
}

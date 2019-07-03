import { AuthService } from "./services/auth.js";

if (AuthService.isLoggedIn()) { window.location.href = "./disciplinas.html"; }

const redirect = () => {
    if (AuthService.isLoggedIn()) {
        window.location.href = "./disciplinas.html";
    }
};

loginButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    await AuthService.authenticate(emailInput.value, passwordInput.value);
    redirect();
}

signupButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("registering");
    await AuthService.register(emailInput.value, passwordInput.value, firstNameInput.value, lastNameInput.value);
    redirect()
    // TODO: redirect user after register
    // TODO: prevent registering same email;
}

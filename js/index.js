import { AuthService } from "./services/auth.js";

loginButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    AuthService.authenticate(emailInput.value, passwordInput.value);
}

signupButton.onclick = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("registering");
    AuthService.register(emailInput.value, passwordInput.value, firstNameInput.value, lastNameInput.value);
    // TODO: redirect user after register
    // TODO: prevent registering same email;
}

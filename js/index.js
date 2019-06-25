import { AuthService } from "./services/auth.js";
import { http } from "./utils/http.js";



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

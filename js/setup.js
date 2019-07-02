import { AuthService } from "./services/auth.js";
import { http } from "./utils/http.js";
import { userTokenPath } from '../config.js';

// Redirect non-authenticated users
if (!AuthService.isLoggedIn()) { window.location.href = "./"; }


// Add the token to all further requests.
const token = localStorage.getItem(userTokenPath);
http.addHeader("Authorization", "Bearer " + token);

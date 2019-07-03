import { api_endpoint, userTokenPath } from '../../config.js'
import { http } from '../utils/http.js'

const AuthService = {

    register: async (email, password, firstName, lastName) => {
        return http.post(`${api_endpoint}/auth/register`, {email, password, firstName, lastName}).then(async response => {
            if (response.ok) {
                let res = (await response.json());
                localStorage.setItem(userTokenPath, res.token);
                return res.token;
            }
        });
    },
    
    authenticate: async (email, password) => {
        return http.post(`${api_endpoint}/auth/login`, {email, password}).then(async response => {
            if (response.ok) {
                let res = (await response.json());
                localStorage.setItem(userTokenPath, res.token);
                return res.token;
            }
        });
    },

    logout: () => {
        localStorage.removeItem(userTokenPath);
        http.removeHeader("Authorization");
        window.location.href = "./index.html";
    },

    parseJwt: (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
    },

    isLoggedIn: () => {
        let token = localStorage.getItem(userTokenPath);
        if (!token) return false;
        let decoded = AuthService.parseJwt(token);
        return decoded && decoded.exp && decoded.exp >= Date.now() / 1000;
    }
             
}

export { AuthService };
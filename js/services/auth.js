import { api_endpoint, userTokenPath } from '../../config.js'
import { http } from '../utils/http.js'

const AuthService = {

    register: async (email, password, firstName, lastName) => {
        let body = JSON.stringify();
        console.log(body);
        return http.post(`${api_endpoint}/auth/register`, {email, password, firstName, lastName});
    },
    
    authenticate: async (email, password) => {
        let body = JSON.stringify();
        return http.post(`${api_endpoint}/auth/login`, {email, password}).then(async response => {
            if (response.ok) {
                let res = (await response.json());
                return res.token;
            }
        });
    },

    logout: async () => localStorage.removeItem(userTokenPath),

    isLoggedIn: async () => new Promise(
        resolve => resolve(!!localStorage.getItem(userTokenPath))
    )
             
}

export { AuthService };
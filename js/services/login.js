import { api_endpoint, userTokenPath } from '../../config.js'

const AuthService = {

    register: async (email, password, firstName, lastName) => {
        let body = JSON.stringify({email, password, firstName, lastName});
        return fetch(`${api_endpoint}/auth/register`, {
            method: "POST",
            body: body,
            headers: {'Content-Type': 'application/json'}
        });
    },
    
    authenticate: async (email, password) => {
        let body = JSON.stringify({email, password});
        return fetch(`${api_endpoint}/auth/login`, {
            method: "POST",
            body: body,
            headers: {'Content-Type': 'application/json'}
        })
        .then(async response => {
            if (response.ok) {
                let res = (await response.json());
                let token = res.token;
                localStorage.setItem(userTokenPath, token);
                return token;
            }
        });
    },

    logout: async () => localStorage.removeItem(userTokenPath),

    isLoggedIn: async () => new Promise(
        resolve => resolve(!!localStorage.getItem(userTokenPath))
    )
             
}

export { AuthService };
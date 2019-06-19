class LoginService {
    
    // TODO: Implement using localStorage to save token.
    
    constructor() {
        this.isLoggedIn = false;
    }

    authenticate(email, password) {
        return new Promise((resolve, reject) => {
            this.isLoggedIn = true;
            resolve({
                email,password
            })
        });
    }

    isLoggedIn() {
        return new Promise((resolve, reject) => {
            resolve({
                isLoggedIn: this.isLoggedIn
            });
        });
    }

    getUserData() {
        return new Promise((resolve, reject) => {

            resolve({
                'firstName': 'Jon',
                'email': 'aegon.targeryan@winterfell.com'
            });
        });
    }
}

export { LoginService };
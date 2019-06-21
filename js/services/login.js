class LoginService {
    
    // TODO: Implement using localStorage to save token.
    
    constructor() {
        this.isLoggedIn = false;
    }

    authenticate(email, password) {
        console.log(email, password);
        return fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ "email": email,
                    "password": password})});
        /*
        fetch('/auth/login').then(function(response) {
            if(response.ok) {
              response.blob().then(function(myBlob) {
                var objectURL = URL.createObjectURL(myBlob);
                myImage.src = objectURL;
              });
            } else {
              console.log('Network response was not ok.');
            }
          })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
          });
        return new Promise((resolve, reject) => {
            this.isLoggedIn = true;
        });*/
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
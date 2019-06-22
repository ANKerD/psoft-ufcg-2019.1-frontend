let customHeaders = {
    'Content-Type': 'application/json'
};

const http = {
    addHeader: (header, content) => {
        customHeaders[header] = content;
    },

    removeHeader: (header) => {
        delete this.customHeaders[header];
    },

    get: (url) => {
        return fetch(url, {method: "GET", headers: customHeaders});
    },

    post: (url, body) => {
        return fetch(url, {
            method: "GET", 
            headers: customHeaders, 
            body: JSON.stringify(body)
        });
    }
};

export {http};
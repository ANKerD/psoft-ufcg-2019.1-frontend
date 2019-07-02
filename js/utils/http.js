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

    get: async (url) => {
        return fetch(url, {method: "GET", headers: customHeaders});
    },

    post: async (url, body) => {
        return fetch(url, {
            method: "POST", 
            headers: customHeaders, 
            body: JSON.stringify(body)
        });
    }
};

export {http};
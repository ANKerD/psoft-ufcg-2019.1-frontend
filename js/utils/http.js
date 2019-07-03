let customHeaders = {
    'Content-Type': 'application/json'
};

const http = {
    addHeader: (header, content) => {
        customHeaders[header] = content;
    },

    removeHeader: (header) => {
        delete customHeaders[header];
    },

    get: async (url) => {
        console.log(`GET ${url}`);
        return fetch(url, {method: "GET", headers: customHeaders});
    },

    delete: async (url) => {
        console.log(`DELETE ${url}`);
        return fetch(url, {method: "DELETE", headers: customHeaders});
    },

    post: async (url, body) => {
        console.log(`POST ${url}`);
        return fetch(url, {
            method: "POST", 
            headers: customHeaders, 
            body: JSON.stringify(body)
        });
    }
};

export {http};
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

    fetch: (url, config) => {
        let headers = config.headers || {};
        headers = Object.assign({}, headers, customHeaders);
        config.headers = headers

        return fetch(url, config);
    }
};

export {http};
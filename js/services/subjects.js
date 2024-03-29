import { api_endpoint } from '../../config.js'
import { http } from '../utils/http.js'

const SubjectsService = {

    findBySubstring: async (substring) => {
        return http.get(`${api_endpoint}/subjects/find/${substring}`).then(async response => {
            if (response.ok) {
                let res = (await response.json());
                return res;
            }
        });
    },

    findOrdered: async (type, descending) => {
        return http.get(`${api_endpoint}/subjects/ranking?type=${type}&desc=${descending}`).then(async response => {
            if (response.ok) {
                let res = (await response.json());
                return res;
            }
        });
    }
}

export { SubjectsService };

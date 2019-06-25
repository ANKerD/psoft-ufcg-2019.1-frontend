import { api_endpoint, userTokenPath } from '../../config.js'
import { http } from '../utils/http.js'

const SubjectsService = {

    findBySubstring: async (substring) => {
        return http.get(`${api_endpoint}/subjects/find/${substring}`).then(async response => {
            if (response.ok) {
                let res = (await response.json());
                return res;
            }
        });
    }
}

export { SubjectsService };

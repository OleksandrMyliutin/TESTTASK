import axios from "axios";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const fetchUserCards = async () => {
    const response = await axios.get('/users');
    return response;
}
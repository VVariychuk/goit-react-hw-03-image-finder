import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

const imageAPI = {
    getImage({ query, page, perPage }) {
        return axios
            .get(
            `/?q=${query}&key=22111785-daf46d01d72927d9b06a2caef&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`
            ).then(response => response.data.hits)
    }
};

export default imageAPI;
import axios from 'axios';

const URL = 'https://pixabay.com/api';
const API_KEY = '36775018-abad017b89dacc6f8ffcc7875';

export const Api = {
  fetchImages(query, page) {
    return axios.get(
      `${URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  },
};


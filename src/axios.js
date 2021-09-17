import axios from 'axios'

const instance = axios.create(
    {
        baseURL:"http://locahost:8001"
    }
);

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://616e3423a83a850017caa863.mockapi.io/product"
})

export default instance;
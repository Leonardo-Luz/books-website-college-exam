import axios from 'axios'

export const service = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    timeout: 1000
});
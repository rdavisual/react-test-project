import axios from 'axios';
import { LIST_ACTION, ADD_ACTION , DEL_ACTION, GETONE_ACTION} from './types';

const ROOT_URL = 'https://books-8b2c4.firebaseio.com';

export function listBooks() {

    const request = axios.get(`${ROOT_URL}/books.json`);
    return {
        type: LIST_ACTION,
        payload: request
    };
}

export function getOneBook(id) {

    const request = axios.get(`${ROOT_URL}/books/${id}.json`);
    return {
        type: GETONE_ACTION,
        payload: request
    };
}

export function createBook(props) {
    const request = axios.post(`${ROOT_URL}/books.json`, props);
    return {
        type: ADD_ACTION,
        payload: request
    };
}

export function deleteBook(id) {
    const request = axios.delete(`${ROOT_URL}/books/${id}.json`);
    return {
        type: DEL_ACTION,
        payload: request
    };
}

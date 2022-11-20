import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../utils';

export interface Book {
    _id: string,
    name: string
}

export interface Chapter {
    _id: string,
    name: string
}

/**
 * Book class to construct a service book.
 */
export class Book {
    /**
     * List of all "The Lord of the Rings" books.
     * @returns Book
     */
     getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            axios
            .get(`${API_URL}/book`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request one specific book
     * @returns Book
     */
    getBookById(id: string): Promise<Book> {
        return new Promise((resolve, reject) => {
            axios
            .get(`${API_URL}/book/${id}`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request all chapters of one specific book
     * @returns Chapter[]
     */
    getChapterById(id: string): Promise<Chapter> {
        return new Promise((resolve, reject) => {
            axios
            .get(`${API_URL}/book/${id}/chapter`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }
}

export default new Book();

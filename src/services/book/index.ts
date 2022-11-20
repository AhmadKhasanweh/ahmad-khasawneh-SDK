import axios, { AxiosResponse, AxiosInstance } from 'axios';

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
    private _axiosInstance: AxiosInstance;
    constructor(_axiosInstance: AxiosInstance) {
        this._axiosInstance = _axiosInstance;
    }
    /**
     * List of all "The Lord of the Rings" books.
     * @returns Book[]
     */
     getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/book`)
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
            this._axiosInstance
            .get(`/book/${id}`)
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
            this._axiosInstance
            .get(`/book/${id}/chapter`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }
}

export default Book;

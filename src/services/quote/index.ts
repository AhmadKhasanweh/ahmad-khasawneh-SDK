import axios, { AxiosResponse, AxiosInstance } from 'axios';

export interface Quote {
    _id: string,
    dialog: string,
    movie: string,
    character: string,
    id: string
}

/**
 * Quote class to construct a service quote.
 */
export class Quote {
    private _axiosInstance: AxiosInstance;
    constructor(_axiosInstance: AxiosInstance) {
        this._axiosInstance = _axiosInstance;
    }
    /**
     * List of all movie quotes.
     * @returns {Quote[]}
     */
     getQuote(): Promise<Quote[]> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/quote`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request one specific movie quote.
     * @param {string} - quote id
     * @returns {Quote}
     */
    getQuoteById(id: string): Promise<Quote> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/quote/${id}`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }
}

export default Quote;

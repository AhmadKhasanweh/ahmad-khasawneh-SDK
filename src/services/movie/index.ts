import axios, { AxiosResponse, AxiosInstance } from 'axios';

export interface Movie {
    _id: string,
    name: string,
    runtimeInMinutes: number,
    budgetInMillions: number,
    boxOfficeRevenueInMillions: number,
    academyAwardNominations: number,
    academyAwardWins: number,
    rottenTomatoesScore: number
}

/**
 * Movie class to construct a service movie.
 */
export class Movie {
    private _axiosInstance: AxiosInstance;
    constructor(_axiosInstance: AxiosInstance) {
        this._axiosInstance = _axiosInstance;
    }
    /**
     * List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies.
     * @returns Movie[]
     */
     getMovie(): Promise<Movie[]> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/movie`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request one specific movie.
     * @returns Movie
     */
    getMovieById(id: string): Promise<Movie> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/movie/${id}`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request all movie quotes of one specific Movie(only working for the LotR trilogy).
     * @returns Movie
     */
    getQoutesByMovieId(id: string): Promise<Movie> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/movie/${id}/quote`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }
}

export default Movie;

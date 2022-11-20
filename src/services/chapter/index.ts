import axios, { AxiosResponse, AxiosInstance } from 'axios';

export interface Chapter {
    _id: string,
    chapterName: string,
    book: string
}

/**
 * Chapter class to construct a service chapter.
 */
export class Chapter {
    private _axiosInstance: AxiosInstance;
    constructor(_axiosInstance: AxiosInstance) {
        this._axiosInstance = _axiosInstance;
    }
    /**
     * List of all chapters.
     * @returns Chapter[]
     */
     getChapters(): Promise<Chapter[]> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/chapter`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request one specific book chapter.
     * @returns Chapter
     */
    getChapterById(id: string): Promise<Chapter> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/chapter/${id}`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }
}

export default Chapter;

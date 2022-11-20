import axios, { AxiosResponse, AxiosInstance } from 'axios';

export interface Character {
    _id: string,
    name: string,
    gender?: "Male" | "Female",
    race: "Human" | "Elf" | "Hobbit" | "Dwarf",
    height?: string,
    birth?: string,
    spouse?: string,
    death?: string,
    realm?: string,
    hair?: string,
    wikiUrl: URL
}

/**
 * Character class to construct a service character.
 */
export class Character {
    private _axiosInstance: AxiosInstance;
    constructor(_axiosInstance: AxiosInstance) {
        this._axiosInstance = _axiosInstance;
    }
    /**
     * List of characters including metadata like name, gender, realm, race and more.
     * @returns {Character[]}
     */
     getCharacters(): Promise<Character[]> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/character`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request one specific character.
     * @param {string} - character id 
     * @returns {Character}
     */
    getCharacterById(id: string): Promise<Character> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/character/${id}`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }

    /**
     * Request all movie quotes of one specific character.
     * @param {string} - character id
     * @returns {Character}
     */
    getQoutesByCharacterId(id: string): Promise<Character> {
        return new Promise((resolve, reject) => {
            this._axiosInstance
            .get(`/character/${id}/quote`)
            .then((response: AxiosResponse) => {
                resolve(response.data.docs);
            })
            .catch(reject);
        });
    }
}

export default Character;

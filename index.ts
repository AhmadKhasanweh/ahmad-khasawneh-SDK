import axios, { AxiosInstance } from 'axios';
import Book from './src/services/book';
import Chapter from './src/services/chapter';
import Character from './src/services/character';
import Movie from './src/services/movie';
import Quote from './src/services/quote';

export default class SDK {
    private _axiosInstance: AxiosInstance = axios.create({
      baseURL: 'https://the-one-api.dev/v2'
    });;
    private bookInstance: Book;
    private chapterInstance: Chapter;
    private characterInstance: Character;
    private movieInstance: Movie;
    private quoteInstance: Quote;
  
    constructor(token: string | undefined) {
      if (token !== undefined) {
        this._axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
      }

      this.bookInstance = new Book(this._axiosInstance);
      this.chapterInstance = new Chapter(this._axiosInstance);
      this.characterInstance = new Character(this._axiosInstance);
      this.movieInstance = new Movie(this._axiosInstance);
      this.quoteInstance = new Quote(this._axiosInstance);
    }

    getBookInstance(): Book {
      return this.bookInstance;
    }
  
    getChapterInstance(): Chapter {
      if (this._axiosInstance.defaults.headers.Authorization === undefined) {
        throw new Error("Authorization is required for this object");
      }
      return this.chapterInstance;
    }

    getCharacterInstance(): Character {
      if (this._axiosInstance.defaults.headers.Authorization === undefined) {
        throw new Error("Authorization is required for this object");
      }
      return this.characterInstance;
    }
    
    getMovieInstance(): Movie {
      if (this._axiosInstance.defaults.headers.Authorization === undefined) {
        throw new Error("Authorization is required for this object");
      }
      return this.movieInstance;
    }

    getQuoteInstance(): Quote {
      if (this._axiosInstance.defaults.headers.Authorization === undefined) {
        throw new Error("Authorization is required for this object");
      }
      return this.quoteInstance;
    }
}

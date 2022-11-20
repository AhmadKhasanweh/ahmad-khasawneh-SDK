# the-lord-of-the-rings-sdk
A SDK for https://the-one-api.dev/v2 API 

## Getting Started

### Installing

NodeJS v10.0.0+ is required.

```sh
npm install -S the-lord-of-the-rings-sdk
```

### Basic Usage

```js
const SDK = require('the-lord-of-the-rings-sdk').default;
// import SDK from 'the-lord-of-the-rings-sdk'; equivalent in TS

const sdk = new SDK();
const book = sdk.getBookInstance();

book.getBooks()
.then(res => {
  console.log(res);
});
```

sample output:
```js
[
  {
    _id: '5cf5805fb53e011a64671582',
    name: 'The Fellowship Of The Ring'
  },
  ...
]
```

#### With Authorization header

- In order to ease the usage of library it needs to set Autherization header only on instance creation

```js
const sdk = new SDK("Brear-token");
```

### Endpoints

| Instance | Endpoints   |      description      |  Requires Authorization |
|----------|----------|:-------------:|------:|
| Book | getBooks |  List of all "The Lord of the Rings" books | N |
| Book | getBookById |  Request one specific book | N |
| Book | getChapterById |  Request all chapters of one specific book | N |
| Chapters | getChapters |  List of all chapters | Y |
| Chapters | getChapterById |  Request one specific book chapter.   | Y |
| Character | getCharacters | List of characters including metadata like name, gender, realm, race and more | Y |
| Character | getCharacterById | Request one specific character | Y |
| Character | getQoutesByCharacterId | Request all movie quotes of one specific character  | Y |
| Movie | getMovies |  List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies | Y |
| Movie | getMovieById | Request one specific movie | Y |
| Movie | getQoutesByMovieId | Request all movie quotes of one specific Movie(only working for the LotR trilogy) | Y |
| Quote | getQuote | List of all movie quotes | Y |
| Quote | getQuoteById | Request one specific movie quote | Y |

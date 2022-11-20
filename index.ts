import axios from 'axios';

const API_URL: string = 'https://the-one-api.dev/v2';

export function getBooks(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getBookById(id: number): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default { getBooks, getBookById };


import axios from 'axios';

const client = axios.create({
  // baseURL: 'http://api-factory.simbirsoft1.com/api/',
  baseURL: 'https://hexlet-allorigins.herokuapp.com/gethttp://api-factory.simbirsoft1.com/api/',
  // baseURL: 'https://cors-anywhere.herokuapp.com/http://api-factory.simbirsoft1.com/api/',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    // Authorization: '4cbcea96de',
  },
});

const orderApi = {
  getCities() {
    client.get('db/city/');
  },
};

export { orderApi };

import axios from 'axios';

const PROXYURL = 'https://cors-anywhere.herokuapp.com/';
const APIURL = 'http://api-factory.simbirsoft1.com/api/';

const client = axios.create({
  baseURL: `${PROXYURL}${APIURL}`,
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    // Authorization: '4cbcea96de',
  },
});

const orderApi = {
  getCity() {
    return client.get('db/city/');
  },
  getPoint() {
    return client.get('db/point/');
  },
};

export { orderApi };

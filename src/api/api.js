import axios from 'axios';

const IMAGE_URL = 'https://api-factory.simbirsoft1.com/';
const APIURL = 'https://api-factory.simbirsoft1.com/api/';

const client = axios.create({
  baseURL: APIURL,
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
  getCars() {
    return client.get('db/car/');
  },
  getCategories() {
    return client.get('db/category/');
  },
  getRates() {
    return client.get('db/rate');
  },
  getStatuses() {
    return client.get('db/orderStatus');
  },
  postOrder(requestBody) {
    return client.post('db/order', requestBody);
  },
  getOrder(id) {
    return client.get(`db/order/${id}`);
  },
};

export { orderApi, IMAGE_URL };

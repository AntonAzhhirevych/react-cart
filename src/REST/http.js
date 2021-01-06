import axios from 'axios';
import API from '../constants/API';

const http = {
  getProduct: async () => {
    const response = await axios.get(API.getProductList);
    return response;
  },
  getCart: async () => {
    const response = await axios.get(API.getCart);
    return response;
  },
  putCart: async cart => {
    const response = await axios.put(API.putCart, cart);
    return response;
  },
  postOrder: async order => {
    const response = await axios.post(API.postOrder, order);
    return response;
  },
};

export default http;

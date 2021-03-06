import tokenService from './tokenService';

const BASE_URL = '/api/products/';

export default {
  index,
  addProduct,
  removeProduct,
  getProduct
}

/*------- Helper Functions -------*/

function index() {
  return fetch(BASE_URL)
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials');
  })
  .then(products => products);
}

function getProduct(productId) {
  return fetch(BASE_URL + productId)
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials');
  })
  .then(product => product);
}

function addProduct(productId) {
  var options = getAuthRequestOptions('POST');
  options.body = JSON.stringify({productId});
  return fetch(BASE_URL + '/cart', options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error adding Product to Cart');
    })  
    .then(cart => cart);
}    

function removeProduct(productId) {
  var options = getAuthRequestOptions('DELETE');
  return fetch(`${BASE_URL}cart/${productId}`, options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error deleting product to Cart');
    })  
    .then(cart => cart);
}    

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({
      Authorization: "Bearer " + tokenService.getToken(),
    'Content-type': 'application/json'  
    })
  };  
}  

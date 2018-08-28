import tokenService from './tokenService';

const BASE_URL = '/api/products/';

function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET'))
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials');
  })
  .then(products => products);
}

export default {
  index,
  addProduct,
  removeProduct
}

/*------- Helper Functions -------*/

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
  options.body = JSON.stringify({productId});
  return fetch(BASE_URL + '/cart/', options)
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

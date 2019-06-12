'use strict';

const api = (function(){
  const  BASE_URL = 'https://thinkful-list-api.herokuapp.com/blashley';

  const getItems = function(){
    //return Promise.resolve('A successful response!');
    return fetch(`${BASE_URL}/items`);
  };



  return {
    getItems,
    BASE_URL
  };




}());
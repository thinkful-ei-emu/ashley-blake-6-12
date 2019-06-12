'use strict';

const api = (function(){
  const  BASE_URL = 'https://thinkful-list-api.herokuapp.com/blashley';

  const getItems = function(){
    //return Promise.resolve('A successful response!');
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name){
    const newItem = JSON.stringify({
      name    
    });     
    
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });  

  };



  return {
    getItems,
    BASE_URL,
    createItem
  };




}());
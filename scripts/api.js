'use strict';

const api = (function(){
  const  BASE_URL = 'https://thinkful-list-api.herokuapp.com/blashley';

  const getItems = function(){
    //return Promise.resolve('A successful response!');
    return fetch(`${BASE_URL}/items`)
      
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
    });/*.json()*///.catch(err => console.error(err.message));  

  };

  const itemUpdate = function(id, updateData){
    console.log(updateData);
    const newData = JSON.stringify(
      updateData
    );    
    console.log(`new data: ${newData}`);
    return fetch (`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newData
    });
  };  


  return {
    getItems,
    BASE_URL,
    createItem,
    itemUpdate,
    
  };




}());
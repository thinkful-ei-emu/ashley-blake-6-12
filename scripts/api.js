'use strict';

const api = (function(){
  const  BASE_URL = 'https://thinkful-list-api.herokuapp.com/blashley';

  const listApiFetch = function(...args) {
    
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          
          error = { code: res.status };

          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {       
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };
  
  
  const getItems = function(){

    return listApiFetch(`${BASE_URL}/items`);
    // let error;
    // return fetch(`${BASE_URL}/items`)
    //   .then(res => {
    //     if(!res.ok) {
    //       error = {code: res.status};
    //     }
    //     return res.json();
    //   })
    //   .then(data => {
    //     if(error) {
    //       error.message = data.message;
    //       return Promise.reject(error);
    //     }
    //     return data;
    //   })
      
  };

  const createItem = function(name){
    const newItem = JSON.stringify({
      name    
    });     
    
    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });  

  };

  const itemUpdate = function(id, updateData){
   
    const newData = JSON.stringify(
      updateData
    );    
   
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newData
    });
  };  

  const deleteItem = function(id){        
    
    return listApiFetch (`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
            
    });
  };  


  return {
    getItems,
    BASE_URL,
    createItem,
    itemUpdate,
    deleteItem
    
    
  };




}());
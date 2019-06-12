/* eslint-disable no-undef */


'use strict';

/* global shoppingList, store, Item */

// eslint-disable-next-line no-unused-vars

$(document).ready(function() {

  shoppingList.bindEventListeners();

  shoppingList.render();

});



// store.items.push(Item.create('apples'));

// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     items.forEach((item) => store.addItem(item));
//     shoppingList.render();
//   });

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.itemUpdate(item.id, { name: 'foobar' });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));

'use strict';

// var mcFly = require('mcFly');

var Reflux = require('reflux');

module.exports = Reflux.createActions([
    // global ui state
    'setActiveItem',
    'setActiveInput',
    'startEditMode',
    'endEditMode',
    'setOpenRecipe',
    'setActiveTitle',
    'setConfirm',
    'setActiveMeta',
    'tweenOut',
    'tweenIn',
    // items
    'init',
    'addItem',
    'check',
    'delete',
    'removeAllChecked',
    'checkAll',
    // recipes
    'newRecipe',
    'renameRecipe',
    'deleteRecipe',
    'setMeta',
    'pushRecentRecipe',
    'incrementCounter',
    // recipe items
    'deleteFromRecipe',
    'renameRecipeItem',
    'addToRecipe'
  ]);

// module.exports = mcFly.createActions({
//     addItem(text) {
//         return {
//             actionType: 'ADD_ITEM',
//             text: text
//         };
//     },

//     init() {
//         return { actionType: 'INIT' };
//     },

//     check(key, state) {
//         return {
//             actionType: 'CHECK',
//             key: key,
//             state: state
//         };
//     },

//     delete(key) {
//         return {
//             actionType: 'DELETE',
//             key: key
//         };
//     },

//     removeAllChecked() {
//         return {
//             actionType: 'REMOVE_ALL_CHECKED'
//         };
//     },

//     checkAll() {
//         return {
//             actionType: 'CHECK_ALL'
//         };
//     },

//     newRecipe() {
//         return {
//             actionType: 'NEW_RECIPE',
//         };
//     },

//     deleteRecipe(recipeKey) {
//         return {
//             actionType: 'DELETE_RECIPE',
//             recipeKey
//         };
//     },

//     addToRecipe(itemText, recipeKey) {
//         return {
//             actionType: 'ADD_TO_RECIPE',
//             itemText, recipeKey
//         };
//     }

// });

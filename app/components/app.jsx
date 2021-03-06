'use strict';

var {slidein} = require('animate');
import {PropTypes} from 'react';
import {StyleResolverMixin, Style} from 'radium';
import {Element, Color, Dimen, Values} from 'styles/vars.js';

var ShoppingList = require('./shopping_list/shopping_list.jsx');
var RecipeList = require('./recipe/recipe_list.jsx');
var NewRecipeButton = require('components/new_recipe_button');
import Toolbar from './toolbar.jsx';

//     font: 100% 'Roboto Slab', sans-serif;
//     color: @base3;
// }

// .main {
//     padding-top: 1rem;
//     margin: 1rem;
//     // padding-left: 1rem;
//     margin: 0 auto;
//     display: block;
//     max-width: 360px;
//     height: 600px;
// }

// @media only screen and (max-device-width: 480px) {
//     .main {
//         overflow-y: auto;
//         // background-color: @base2-light;
//     }
// }

const globalStyles = [{
  body: {
    fontFamily: Values.fontFamily,
    fontSize: Element.Body.fontSize,
    background: Element.Body.background,
    tapHighlightColor: 'rgba(0,0,0,0)',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    textRendering: 'optimizelegibility'
  }
}
];

const styles = {
  display: 'flex',
  justifyContent: 'center',
  color: Color.black.text
};

const App = React.createClass({
  displayName: 'App',

  propTypes: {
    items: PropTypes.object
  },

  mixins: [StyleResolverMixin],

  render() {
    const style = this.buildStyles(styles);
    const {items} = this.props;

    return d('div', {style}, [
        d(Toolbar),
        <Style rules={globalStyles} />,
        d('main', {style: {marginTop: Dimen.Toolbar.height}}, [
          d(ShoppingList, {items})])
        ]);

    // let recipes = this.state.recipes.slice().reverse();
    // let recipesLists = _.map(recipes, recipe =>
    //         d(RecipeList, {ui: this.state.ui, key: recipe.key, recipe}));

        // d(NewRecipeButton, {key: 1}),
        // recipes.length > 0 ? a.slidein(recipesLists) : null]);

  }

});

module.exports = App;

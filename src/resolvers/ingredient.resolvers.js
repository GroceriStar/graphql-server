// import getIngredients from '../data/ingredient.data';
import { getIngredients } from '../data/selector';

export default {
  Query: {

    ingredient(parent, args, ctx, info) {
      // fetch all the departments
      const ingredients = getIngredients();
      if (!args.id) {
        return ingredients;
      }
      return ingredients.filter((d)=>{
        return d.ingredient_id == args.id;
      })
    },

  },
};

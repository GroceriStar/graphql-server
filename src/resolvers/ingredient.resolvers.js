import getIngredients from '../data/ingredient.data';

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

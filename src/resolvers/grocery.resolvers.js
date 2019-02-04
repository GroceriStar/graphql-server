import { getGroceries, getGroceryByNameWithDepAndIngKey, getUltimateGrocery } from '../data/selector';

export default {
  Query: {

    grocery(parent, args, ctx, info) {
      // fetch all the departments
      const groceries = getGroceries();
      if (!args.id) {
        return groceries;
      }

      // don't like lines like that, hard to keep in mind
      // also can be replaced with lodash method
      return groceries.filter((d) => {
        return d.grocery_id == args.id;
      })
    },

  },
};

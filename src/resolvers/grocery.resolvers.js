import getGroceries from '../data/grocery.data';

export default {
  Query: {
    grocery(parent, args, ctx, info) {
      // fetch all the departments
      const groceries = getGroceries();
      if (!args.id) {
        return groceries;
      }
      return groceries.filter((d)=>{
        return d.grocery_id == args.id;
      })
    },
  },
};

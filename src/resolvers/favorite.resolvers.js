import data from '../data/favorite.data';
// import { getGroceries } from '../data/selector';

export default {
  Query: {

    favorite(parent, args, ctx, info) {

      console.log(data.favorites)
      // fetch all the departments
      // const departments = getDepartments();
      // if (!args.id) {
      //   return departments;
      // }

      // don't like lines like that, hard to keep in mind
      // also can be replaced with lodash method
      // return departments.filter((d) => {
      //   return d.department_id == args.id;
      // })
    },

  },
};

import data from '../data/usergrocery.data';
// import { getDepartments } from '../data/selector';

export default {
  Query: {
    user_grocery(parent, args, ctx, info) {

      console.log(data.usergroceries)

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

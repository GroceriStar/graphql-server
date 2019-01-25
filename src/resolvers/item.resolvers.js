import data from '../data/item.data';
// import { getDepartments } from '../data/selector';

export default {
  Query: {
    abc(parent, args, ctx, info) {
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

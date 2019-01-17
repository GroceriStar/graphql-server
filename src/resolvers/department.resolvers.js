import data from '../data/department.data';

export default {
  Query: {
    departments(parent, args, ctx, info) {
      if (!args.id) {
        return data.departments;
      }

      for (let i = 0; i < data.departments.length; i++) {
        if (data.departments[i].department_id === args.id) {
          return [data.departments[i]];
        }
      }
    },
  },
  Mutation: {
    createDepartment(parent, args, ctx, info) {
      let newDepartment = {};
      if (args) {
        newDepartment = args;
        newDepartment.created_at = Date.now();
        newDepartment.updated_at = Date.now();
        data.departments.push(newDepartment);
      }
      return args;
    },
    updateDepartment(parent, args, ctx, info) {
      if (args) {
        // find the department that has the args.department_id, an update its data
      }
    },
    removeDepartment(parent, args, ctx, info) {
      // find the department with the given id and remove it from the database/static_data
    },
  },
};

// import getDepartments from '../data/department.data';
import { getDepartments } from '../data/selector'

export default {
  Query: {

    departments (parent, args, ctx, info) {
      // fetch all the departments
      const departments = getDepartments()
      if (!args.id) {
        return departments
      }

      // don't like lines like that, hard to keep in mind
      // also can be replaced with lodash method
      return departments.filter((d) => {
        return d.department_id == args.id
      })
    }

  },
  Mutation: {

    createDepartment (parent, args, ctx, info) {
      const departments = getDepartments()
      if (args.id) {
        args.created_at = Date.now()
        args.updated_at = Date.now()
        departments.push(args)
      }
      return args
    },

    updateDepartment (parent, args, ctx, info) {
      const departments = getDepartments()
      if (args) {
        // update a department by a given id
        if (!args.id) {
          return 'please provide a department id'
        }
        return departments.map((d) => {
          if (d.department_id == args.id) {
            d.name = args.name
            d.desc = args.desc
          }
          return d
        })
      }
    },

    removeDepartment (parent, args, ctx, info) {
      // find the department with the given id and remove it
      const departments = getDepartments()
      return departments.filter(d => {
        return d !== args.id
      })
    }

  }
}

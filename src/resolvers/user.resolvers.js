// import getUsers from '../data/user.data';
import { getUsers } from '../data/selector'

export default {
  Query: {

    user (parent, args, ctx, info) {
      // fetch all the departments
      const users = getUsers()
      if (!args.id) {
        return users
      }

      // don't like lines like that, hard to keep in mind
      // also can be replaced with lodash method
      return users.filter((d) => {
        return d.userId == args.id
      })
    }

  }
}

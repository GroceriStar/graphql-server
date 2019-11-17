import * as path from 'path'
import {
  fileLoader
} from 'merge-graphql-schemas'

/*  AUTOMATED APPROACH: Put your resolvers anywhere
    with ".resolvers.[js/ts]" naming convention */
const resolvers = fileLoader(path.join(__dirname, './**/*.resolvers.*'))

export default resolvers

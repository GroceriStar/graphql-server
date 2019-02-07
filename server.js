import {
  GraphQLServer,
} from 'graphql-yoga';

import {
  default as typeDefs,
} from './src/typeDefs';

import {
  default as resolvers,
} from './src/resolvers';

const options = {
  port: process.env.PORT || 3000
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

// to add routes you should use server.express 
server.express.get('/status', (req, res) => {
  res.send({ status: 'ok' })
})

if (process.env.NODE_ENV !== 'test') {
server.start(options, () =>
    console.log(`Server is running ⚡ on localhost:${options.port}`)
  )
  .catch(err => console.error('connection Error', err));
}

module.exports = server;

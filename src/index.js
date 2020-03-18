const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  context: async ({req}) => {
    return { user: 'TEST'}
  },
  typeDefs,
  resolvers
})

const start = async () => {
  const { url } = await server.listen()
  console.log(`🚀 Server ready at ${url}`)
} 

start();
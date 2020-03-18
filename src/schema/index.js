const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    test(tag: String): User
  }
  type User {
    id: ID!
    email: String!
    comment: String!
  }
`

module.exports = typeDefs;
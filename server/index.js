const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const typeDefs = fs.readFileSync(`${__dirname}/graphql/typeDefs.graphql`, 'utf8');
const resolvers = require('./graphql/resolvers');
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
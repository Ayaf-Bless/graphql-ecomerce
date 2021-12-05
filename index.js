const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: [String!]!
    age: Int
  }
`;
const resolvers = {
  Query: {
    hello: () => ["Hello word", "bonjour", 1],
    age: () => 33,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

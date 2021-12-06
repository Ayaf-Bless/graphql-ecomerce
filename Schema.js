const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: [String!]!
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    onSale: Boolean!
    id: ID!
    image: String!
    category: Category
  }
  type Category {
    name: String!
    id: ID!
    products: [Product!]!
  }
`;

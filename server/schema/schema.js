const { makeExecutableSchema } = require("graphql-tools");
const { resolvers } = require("./resolvers");

const typeDefs = `
type Book {
    id: ID
    name: String
    genre: String
    author: Author
   }
  type Author {
     id: ID
     name: String
     age: Int
     books:[Book]
   }
  type Query {
    book(id: ID!): Book
    author(id: ID!): Author
    books:[Book]
    authors:[Author]
   }

  type Mutation {
    addAuthor(name: String!, age: Int!):Author
    addBook(name: String!, genre: String!, authorId: ID!):Book
  }
`;

module.exports = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  })
};

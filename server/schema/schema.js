const { makeExecutableSchema } = require("graphql-tools");
const Book = require("../models/book");
const Author = require("../models/Author");

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

const resolvers = {
  Query: {
    book: (parent, args) => Book.findById(args.id),
    author: (parent, args) => Author.findById(args.id),
    books: () => Book.find({}),
    authors: () => Author.find({})
  },
  Mutation: {
    addAuthor: (parent, args) => {
      let author = new Author({ name: args.name, age: args.age });
      return author.save();
    },
    addBook: (parent, args) => {
      let book = new Book({
        name: args.name,
        genre: args.genre,
        authorId: args.authorId
      });
      return book.save();
    }
  }
};

module.exports = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  })
};

/*

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
});

*/

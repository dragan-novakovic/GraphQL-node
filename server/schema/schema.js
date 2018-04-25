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
`;

const resolvers = {
  Query: {
    book: (parent, args) => Book.findById(args.id),
    author: (parent, args) => Author.findById(args.id),
    books: () => Book.find({}),
    authors: () => Author.find({})
  }
};

module.exports = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  })
};

/*

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent.id });
      }
    }
  })
});

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

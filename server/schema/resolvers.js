const Book = require("../models/book");
const Author = require("../models/Author");

const resolvers = {
  Query: {
    book: (parent, args) => Book.findById(args.id),
    author: (parent, args) => Author.findById(args.id),
    books: () => Book.find({}),
    authors: () => Author.find({})
  },
  Book: {
    author: (parent, args) => Author.findById(parent.authorId)
  },
  Author: {
    books: (parent, args) => Book.find({ authorId: parent.id })
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
  resolvers
};

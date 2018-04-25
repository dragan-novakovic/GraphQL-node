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

export default resolvers;

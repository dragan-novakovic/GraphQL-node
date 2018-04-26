import React, { Component } from "react";
import { Query } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

// components
import BookDetails from "./BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayBooks() {
    return (
      <Query query={getBooksQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return data.books.map(book => (
            <li
              key={book.id}
              onClick={e => this.setState({ selected: book.id })}
            >
              {book.name}
            </li>
          ));
        }}
      </Query>
    );
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default BookList;

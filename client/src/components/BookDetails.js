import React, { Component } from "react";
import { Query } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails() {
    return (
      <Query query={getBookQuery} variables={{ id: this.props.bookId }}>
        {({ loading, error, data, variables: { id } }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <div>
              <h2>{data.book.name}</h2>
              <p>{data.book.genre}</p>
              <p>{data.book.author.name}</p>
              <p>All books by this author:</p>
              <ul className="other-books">
                {data.book.author.books.map(item => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default BookDetails;

/*



*/

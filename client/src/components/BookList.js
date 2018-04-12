import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
// apollo 2.1 render prop

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBook(){
    const {data} = this.props;
    if(data.loading){
      return (<div>Loading Books.....</div>)
    } else {
      return data.books.map(book => <li key={book.id}>{book.name}</li>)
    }
  };
  render() {
    return (
      <div>
        <ul>
          {this.displayBook()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

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
  render() {
    return (
      <div>
        <ul>
          <li>fjwijfiwjf</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

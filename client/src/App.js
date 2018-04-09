import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "localhost:3333/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Hii</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

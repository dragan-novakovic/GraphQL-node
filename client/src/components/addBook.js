import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }
  displayAuthors() {
    return (
      <Query query={getAuthorsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <option>Loading...</option>;
          if (error) return <option>Error :(</option>;
          return data.authors.map(author => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          });
        }}
      </Query>
    );
  }
  submitForm(e) {
    e.preventDefault();
    // use the addBookMutation
    return (
      <Mutation
        mutation={addBookMutation}
        variables={{
          name: this.state.name,
          genre: this.state.genre,
          authorId: this.state.authorId
        }}
        refetchQueries={[{ query: getBooksQuery }]}
      >
        {({ data, loading, error, called }) =>
          console.log(data, loading, error, called)
        }
      </Mutation>
    );
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default AddBook;

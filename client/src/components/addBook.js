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
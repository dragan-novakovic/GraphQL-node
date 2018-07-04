const express = require("express");
const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const URL = "mongodb://Ja:ja@ds227939.mlab.com:27939/graphql-db";

mongoose.connect(URL);
mongoose.connection.once("open", () => console.log("Connected to DB"));

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen("3333", () => console.log("Started Server on Port 3333 !!!!!"));

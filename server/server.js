const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const URL = "mongodb://Ja:ja@ds227939.mlab.com:27939/graphql-db";

mongoose.connect(URL);
mongoose.connection.once("open", () => console.log("Connected to DB"));

// apollo
// 25.03.2018
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen("3333", () => console.log("Started Server on Port 3333 !!!!!"));

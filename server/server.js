const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { schema } = require("./schema/schema");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const URL = "mongodb://Ja:ja@ds227939.mlab.com:27939/graphql-db";

mongoose.connect(URL);
mongoose.connection.once("open", () => console.log("Connected to DB"));

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen("3333", () => console.log("Started Server on Port 3333 !!!!!"));

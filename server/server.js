const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen("3333", () => console.log("Started Server on Port 3333 !!!"));

const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
//import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require('./utils/auth');

//import db connection 
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

//setup ApolloServer
const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  constext: authMiddleware,
});

//apply ApolloServer
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __dirname = path.dirname("");
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

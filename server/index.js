const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs: require('./schema'),
  resolvers: require('./resolvers'),
});

// Initialize the app
const app = express();

app.use(require('compression')());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true,
}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});

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
  typeDefs: require('./typeDefs'),
  resolvers: require('./resolvers'),
});

// Initialize the app
const app = express();

app.use(require('compression')());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// serve up the static app
app.use('/app', express.static(path.join(__dirname, '../public')))

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});

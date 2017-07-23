import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const GRAPHQL_PORT = 8080;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, pretty: true }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(GRAPHQL_PORT, () => console.log('The server is run smoothly bro'));

module.exports = app;

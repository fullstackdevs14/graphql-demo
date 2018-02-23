import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schema';

const server = express();

mongoose.connect('mongodb://y2dev:test1234@ds245518.mlab.com:45518/graphql')

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection to database was successful!');
})

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

server.listen(4000, () => {
    console.log('Listening on port 4000!');
})
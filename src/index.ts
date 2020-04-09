import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import schema from './schema';

const app = express();
const port = process.env.PORT || '8001';

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app });

app.listen(port, () => (
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
));

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import resolvers from './resolvers';
import schema from './schema';

const app = express();
const port = process.env.PORT || '8001';

app.use(cors());

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app });

app.get('/breeds/name/:name', (req, res) => {
  const { params: { name } } = req;
  return res.json(resolvers.Query.breedByName(null, { name }));
});

app.get('/breeds/:id', (req, res) => {
  const { params: { id } } = req;
  return res.json(resolvers.Query.breedById(null, { id }));
});

app.get('/breeds', (_req, res) => res.send(resolvers.Query.allBreeds()));

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));

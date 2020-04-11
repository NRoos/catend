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

// these are here purely because the assignment asked for REST endpoints
app.get('/breeds/name/:name', async (req, res) => {
  const { params: { name } } = req;
  const result = await resolvers.Query.breedByName(null, { name });
  return res.json(result);
});

app.get('/breeds/:id', async (req, res) => {
  const { params: { id } } = req;
  const result = await resolvers.Query.breedById(null, { id });
  return res.json(result);
});

app.get('/breeds', async (_req, res) => {
  const result = await resolvers.Query.allBreeds();
  res.send(result);
});

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));

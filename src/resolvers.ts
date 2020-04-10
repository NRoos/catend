const { MongoClient } = require('mongodb');

const { env: { MONGOURL } } = process;
let db: any;

const client = new MongoClient(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async () => {
  db = await client.db('heroku_3p63c8jl');
});

type Breed = {
  id: String,
  name: String,
  description: String,
  temperament: String,
  origin: String,
};

export default {
  Query: {
    breedById: async (_parent: any, { id }: { id: String }) => {
      const breeds = await db
        .collection('breed')
        .find()
        .toArray()
        .then((res: Breed[]) => res);
      const res = breeds.find((breed: Breed) => breed.id === id);
      return typeof res === 'undefined' ? [] : [res];
    },
    breedByName: async (_parent: any, { name }: { name: String }) => {
      const breeds = await db
        .collection('breed')
        .find()
        .toArray()
        .then((res: Breed[]) => res);
      const res = await breeds.find((breed: Breed) => breed.name === name);

      return typeof res === 'undefined' ? [] : [res];
    },
    allBreeds: async () => db
      .collection('breed')
      .find()
      .toArray()
      .then((res: Breed[]) => res),
  },
};

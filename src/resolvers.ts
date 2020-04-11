const { MongoClient } = require('mongodb');

const { env: { MONGOURL, MONGONAME } } = process;
let db: any;

const client = new MongoClient(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async () => {
  db = await client.db(MONGONAME);
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
        .find({ id })
        .toArray()
        .then((res: Breed[]) => res);

      return typeof breeds === 'undefined' ? [] : breeds;
    },
    breedByName: async (_parent: any, { name }: { name: string }) => {
      const regex = new RegExp(name);
      const breeds = await db
        .collection('breed')
        .find({ name: regex })
        .toArray()
        .then((res: Breed[]) => res);

      return typeof breeds === 'undefined' ? [] : breeds;
    },
    allBreeds: async () => db
      .collection('breed')
      .find()
      .toArray()
      .then((res: Breed[]) => res),
  },
};

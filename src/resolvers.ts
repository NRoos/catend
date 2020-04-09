const breeds: Breed[] = [
  {
    id: 1,
    name: 'tabby',
    description: 'very annyoing, also ugly',
    temperament: 'not very high at all',
    origin: 'unknown',
  },
  {
    id: 2,
    name: 'not-tabby',
    description: 'very annyoing, also very pretty',
    temperament: 'haha yes',
    origin: 'tabby',
  },
];

type Breed = {
  id: Number,
  name: String,
  description: String,
  temperament: String,
  origin: String,
};

export default {
  Query: {
    breedById(_parent : any, { id }: { id: Number }): Breed {
      return breeds.find((breed) => breed.id === id);
    },
    breedByName(_parent : any, { name } : { name: String }): Breed {
      return breeds.find((breed) => breed.name === name);
    },
    allBreeds(): Breed[] {
      return breeds;
    },
  },
};

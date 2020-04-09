import { gql } from 'apollo-server-express';

export default gql`
  type Breed {
    id: Int 
    name: String
    description: String
    temperament: String
    origin: String
  },
  type Query {
    breedById(id: Int): Breed,
    breedByName(name: String!): Breed
    allBreeds: [Breed]
  }
`;

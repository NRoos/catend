import { gql } from 'apollo-server-express';

export default gql`
  type Breed {
    id: String
    name: String
    description: String
    temperament: String
    origin: String
  },
  type Query {
    breedById(id: String!): Breed,
    breedByName(name: String!): Breed
    allBreeds: [Breed]
  }
`;

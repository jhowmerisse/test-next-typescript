const { gql, ApolloServer } = require("apollo-server");
//database
let patients = [{ id: 1, name: "jhow", gender: "masc" }];

// define types
const typeDefs = gql`
  type Patient {
    id: ID!
    name: String!
    gender: String
  }

  type Query {
    patients: [Patient]
    patient(id: ID!): Patient
  }

  type Mutation {
    create(id: ID!, name: String!, gender: String!): Patient
    delete(id: ID!): Boolean
    update(id: ID!, name: String, gender: String): Patient
  }
`;

//define resolvers
const resolvers = {
  Query: {
    patients: () => patients,
    patient: (_, { id }) => patients.find((patient) => patient.id === id),
  },
  Mutation: {
    create: (_, id, name, gender) => {
      const patient = { id, name, gender };

      patients.push(patient);

      return patient;
    },
    delete: (_, { id }) => {
      const filteredPatients = patients.filter((patient) => patient.id !== id);
      patients = filteredPatients;
      return true;
    },
    update: (_, { id, name, gender }) => {
      const patient = patients.find((patient) => patient.id === id);
      patient.id = patient.id;
      patient.name = name ? name : patient.name;
      patient.gender = gender ? gender : patient.gender;
    },
  },
};

//create server
const app = new ApolloServer({ typeDefs, resolvers });

//run server
app.listen();

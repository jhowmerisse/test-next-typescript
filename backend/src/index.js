const { gql, ApolloServer } = require("apollo-server");
let users = [{ id: 1, name: "jhow", gender: "masc" }];

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    gender: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    create(id: ID!, name: String!, gender: String!): User
    delete(id: ID!): Boolean
    update(id: ID!, name: String, gender: String): User
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
  },
  Mutation: {
    create: (_, id, name, gender) => {
      const user = { id, name, gender };

      users.push(user);

      return user;
    },
    delete: (_, { id }) => {
      const filteredUsers = users.filter((user) => user.id !== id);
      users = filteredUsers;
      return true;
    },
    update: (_, { id, name, gender }) => {
      const user = users.find((user) => user.id === id);
      user.id = user.id;
      user.name = name ? name : user.name;
      user.gender = gender ? gender : user.gender;
    },
  },
};

const app = new ApolloServer({ typeDefs, resolvers });

app.listen();

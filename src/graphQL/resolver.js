import user from "../db/models/user.js";

const resolvers = {
  Query: {
    users: async () => {
      const result = await user.selectAll();
      return result;
    },
  },

  Mutation: {
    addUser: async (_, { userName }) => {
      const result = await user.insert( userName);
      return result
    },
  },
};

export default resolvers;
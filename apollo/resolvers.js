export const resolvers = {
  Query: {
    viewer(_parent, _args, context) {
      return context.dataSources.users.findOne(1);
    },
  },
}

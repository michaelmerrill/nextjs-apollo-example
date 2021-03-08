import { DataSource } from "apollo-datasource";
import DataLoader from "dataloader";

const users = [
  {
    id: 1,
    name: "John Smith",
    status: "cached",
  },
  {
    id: 2,
    name: "Suzy Q",
    status: "unknown",
  },
];

export class UsersDataSource extends DataSource {
  initialize() {
    this.loader = new DataLoader((keys) =>
      Promise.resolve(
        keys.map(key => {
          const user = users.find(({id}) => id === key);

          if (!user) {
            return new Error(`Could not find user with id: ${id}`);
          }

          return user;
        })
      )
    );
  }

  findOne(id) {
    if (!id) {
      throw new Error("Must include user id.");
    }

    return this.loader.load(id);
  }

  findAll({ first }) {
    return users.slice(0, first);
  }
}

export const dataSources = () => ({
  users: new UsersDataSource(),
});

import { mockChannels } from "../data/channels";
import { mocksUsers } from "../data/users";
import { Channel, ChannelUser, FieldType, User } from "../type";

export const api = {
  login: async ({ username, password }: FieldType): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          resolve({
            username,
            avatar:
              "https://gravatar.com/avatar/9da7a3b0aa8603d741759fc61e08c682?s=400&d=robohash&r=x",
          });
        } else {
          reject({
            status: 401,
            message: "Username or Password are incorrect",
          });
        }
      }, 3000);
    });
  },
  loadChannels: async (): Promise<Channel[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockChannels);
      }, 5000);
    });
  },
  loadUsers: async (): Promise<ChannelUser[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mocksUsers);
      }, 6500);
    });
  },
};

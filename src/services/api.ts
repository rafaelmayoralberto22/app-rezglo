import { FieldType, User } from "../type";

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
};

import { FieldType } from "../type";

export const api = {
  login: async ({ username, password }: FieldType) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          resolve({ username });
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

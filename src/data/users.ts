import { ChannelUser } from "../type";

export const mocksUsers: ChannelUser[] = [
  {
    id: 1,
    username: "ygonzales",
    name: "Yaniel Gonzalez",
    history: [
      {
        id: 1,
        avatar:
          "https://gravatar.com/avatar/9da7a3b0aa8603d741759fc61e08c682?s=400&d=robohash&r=x",
        timestamp: 1695777623315,
        username: "ygonzales",
        message: "Hi",
      },
      {
        id: 2,
        avatar:
          "https://gravatar.com/avatar/9da7a3b0aa8603d741759fc61e08c682?s=400&d=robohash&r=x",
        timestamp: 1695777980897,
        username: "admin",
        message: "Hi",
      },
    ],
  },
  {
    id: 2,
    username: "rmayor",
    name: "Rafael Mayor Alberto",
    history: [
      {
        id: 1,
        avatar:
          "https://gravatar.com/avatar/9da7a3b0aa8603d741759fc61e08c682?s=400&d=robohash&r=x",
        timestamp: 1695777623315,
        username: "rmayor",
        message: "Hi",
      },
      {
        id: 2,
        avatar:
          "https://gravatar.com/avatar/9da7a3b0aa8603d741759fc61e08c682?s=400&d=robohash&r=x",
        timestamp: 1695777980897,
        username: "admin",
        message: "Hi",
      },
    ],
  },
  {
    id: 3,
    username: "admin",
    name: "Admin",
    history: [],
  },
  {
    id: 3,
    username: "madelrio",
    name: "Marcelo del Rio",
    history: [],
  },
];

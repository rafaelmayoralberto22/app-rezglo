export type FieldType = {
  username?: string;
  password?: string;
};

export type User = Pick<FieldType, "username">;

export type GlobalState = {
  user: User | null;
  changeUser: (user: User | null) => void;
};

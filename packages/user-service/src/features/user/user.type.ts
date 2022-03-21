export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdOn: Date;
}

export interface UserCreated {
  token: string;
}

export type UserNoPassword = Omit<IUser, "password">;

export type UserLogin = UserNoPassword & UserCreated;

export type UserAuthenticated = Pick<IUser, "_id" | "email">;

import { User } from "firebase/auth";

export type TUser = User | null;

export interface IAuthContextTypes {
  user: TUser;
  register: (credentials: IUserCredentials) => void;
  login: (credentials: IUserCredentials) => void;
  logout: () => void;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

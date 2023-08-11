import { user } from "../UsersContext/types";

export interface IElect {
  users: user[];
}

export interface IElectContextTypes {
  elect: IElect;
  getElect: () => void;
  addUserToElect: (user: user) => void;
  deleteUserFromElect: (id: number) => void;
  isAlreadyInElect: (id: number) => boolean;
}

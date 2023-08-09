export type usersContextType = {
  getTotalPageCount: () => void;
  users: user[];
  user: user | null;
  getUsers: (gender?: string) => void;
  page: number;
  pageTotalCount: number;
  setPage: (num: number) => void;
  getFilteredUsers: ({ gender }: { gender: string }) => void;
  addUser: (newUser: newUser) => void;
  deleteUser: (id: number) => void;
  editUser: (newData: user) => void;
  getOneUser: (id: number) => void;
};
export type user = {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  hobby: string[];
  gender: string;
  email: string;
};
export interface newUser {
  name: string;
  age: number;
  image: string;
  hobbies: string[];
  description: string;
  email: string;
  gender: string;
}

export type initSateType = {
  pageTotalCount: any;
  users: user[];
  user: user | null;
};

type usersActionType = {
  type: "users";
  payload: user[];
};
type userActionType = {
  type: "user";
  payload: user | null;
};
type pageTotalCountType = {
  type: "pageTotalCount";
  payload: number;
};
export type allActionType =
  | usersActionType
  | userActionType
  | pageTotalCountType;

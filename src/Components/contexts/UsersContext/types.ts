export type usersContextType = {
  users: user[];
  user: user | null;
  page: number;
  pageTotalCount: number;
  getUsers: (gender?: string) => void;
  getTotalPageCount: () => void;
  setPage: (num: number) => void;
  getFilteredUsers: ({ gender }: { gender: string }) => void;
  AddUser: (newUser: user) => void;
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

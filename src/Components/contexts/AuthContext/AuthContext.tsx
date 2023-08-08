import React, {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { Auth } from "firebase/auth";
import { auth } from "../../../firebase";
import { ADMINS } from "../../../utils/consts";
import { TUser } from "./types";

interface IAuthContextTypes {
  user: TUser;
  register: (credentials: IUserCredentials) => void;
  login: (credentials: IUserCredentials) => void;
  logout: () => void;
  isAdmin: () => boolean;
}
interface IUserCredentials {
  email: string;
  password: string;
}

export const authContext = createContext<IAuthContextTypes | null>(null);

interface IAuthContextProps {
  children: ReactNode;
}

const AuthContext: FC<IAuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<TUser>(null);

  async function register({ email, password }: IUserCredentials) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      alert(e.code);
    }
  }
  async function login({ email, password }: IUserCredentials) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      alert(e.code);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (e: any) {
      alert(e.code);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  function isAdmin() {
    if (!user) {
      return false;
    }

    return ADMINS.includes(user.email as string);
  }

  const value = {
    user,
    register,
    login,
    logout,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;

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
import { useNavigate } from "react-router-dom";

interface IAuthContextTypes {
  user: TUser;
  register: (credentials: IUserCredentials) => void;
  login: (credentials: IUserCredentials) => void;
  logout: () => void;
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
  const navigate = useNavigate();
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
      navigate("/");
    } catch (e: any) {
      alert(e.code);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const value = {
    user,
    register,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;

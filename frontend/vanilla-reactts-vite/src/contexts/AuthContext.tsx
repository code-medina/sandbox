import { createContext } from "react";
import { type User } from "firebase/auth";
import type { UserWithoutPassword } from "../types";

type Props = {
  isLoading:boolean
  userCurrent: UserWithoutPassword | null;
  register: (email: string, password: string, rol?: string) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
};
export const AuthContext = createContext<Props | null>(null);

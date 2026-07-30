import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { UserWithoutPassword } from "../types";
import { authFirebase } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  type User as UserAuth,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { crearUser, obtenerUserPorId } from "../services/userService";

type Props = {
  children: React.ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const [userCurrent, setUserCurrent] = useState<UserWithoutPassword | null>(
    null,
  );
  const [isLoading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(
      authFirebase,
      email,
      password,
    );
    return userCredential.user;
  };
  const register = async (email: string, password: string, rol = "user") => {
    const newUser = await createUserWithEmailAndPassword(
      authFirebase,
      email,
      password,
    );
    //creo usuario documento
    await crearUser({ email, rol, id: newUser.user.uid });
    return newUser.user;
  };

  const logout = async () => {
    return await signOut(authFirebase);
  };

  const handlerChangedStateUser = async (credential: UserAuth | null) => {
    if (!credential) {
      setUserCurrent(null);
      setLoading(false);
      return;
    }

    const user = await obtenerUserPorId(credential.uid);

    if (!user) {
      setUserCurrent(null);
      setLoading(false);
      return;
    }

    setUserCurrent(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      authFirebase,
      handlerChangedStateUser,
    );
    // Limpiamos el observador al desmontar
    return () => unsubscribe();
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{ userCurrent, register, login, logout, isLoading }}
      >
        {!isLoading && children}
      </AuthContext.Provider>
    </>
  );
};

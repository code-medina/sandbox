import { doc, getDoc, setDoc } from "firebase/firestore";
import type { User, UserWithoutPassword } from "../types";
import { db } from "../firebase/config";

export const crearUser = async (user: UserWithoutPassword) => {
    //ref a documento
    const docRef = doc(db, "usuarios", user.id);
    return await setDoc(docRef, user);
}
export const obtenerUserPorId = async (id: string) => {
    const docRef = doc(db, "usuarios", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error("Not existe user");
    const aux = { ...docSnap.data(), id: docSnap.id } as Omit<User, "password">
    return aux;


}
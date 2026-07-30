import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import type { Libro } from "../types";
export const obtenerListadoLibros = async () => {
    const refCol = collection(db, "libros");
    const refDocs = await getDocs(refCol);

    return refDocs.docs.map(doc => {
        const aux = { ...doc.data(), id: doc.id } as Libro
        return aux;
    })

}
/**
 * return [id ] new libre create
 */
export const crearlibro = async (libro: Omit<Libro, "id">) => {
    const refCol = collection(db, "libros");
    const refDoc = await addDoc(refCol, libro);

    return refDoc.id
}
export const editLibro = async (id: string, data: Omit<Libro, "id">) => {
    const refDoc = doc(db, "libros", id);
    return updateDoc(refDoc, data)
}

export const eliminarLibro=async(id:string)=>{
    const refDoc=doc(db,"libros",id);
    return await deleteDoc(refDoc)
}
import { useEffect, useState } from "react";
import type { Libro } from "../types";
import { obtenerListadoLibros } from "../services/libroService";

export const useLibros = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const onEditLibro=(id:string,data:Omit<Libro,"id">)=>setLibros((pre:Libro[])=>pre.map(l=>l.id===id?{...l,...data}:l));
  const onNewLibro = (libro: Libro) => setLibros((pre) => [...pre, libro]);
  const onDeleteLibro = (id: string) => {
    if (!libros.find((l) => l.id === id)) return;
    const update = libros.filter((l) => l.id !== id);
    setLibros(update);
  };
  useEffect(() => {
    obtenerListadoLibros()
      .then((data) => setLibros(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return { libros, isLoading, error, onNewLibro, onDeleteLibro ,onEditLibro};
};

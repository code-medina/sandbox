import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) throw new Error("Se necesita estar dentro del provider");

  return context;
};

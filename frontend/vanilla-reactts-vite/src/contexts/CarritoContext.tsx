import { createContext } from "react";
import type { Cart } from "../types";
type Props = {
  carrito: Cart[];
  setCantidadProducto:(id:string)=>number;
  onSetCarrito: (cart: Cart) => void;
  getTotalCantidad: () => number;
  getTotalPrecio: () => number;
};
export const CarritoContext = createContext<Props |null>(null);

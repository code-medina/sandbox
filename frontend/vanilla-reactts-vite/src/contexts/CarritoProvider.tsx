import { useState } from "react";
import type { Cart } from "../types";
import { CarritoContext } from "./CarritoContext";

type Props = {
  children: React.ReactNode;
};
export const CarritoProvider = ({ children }: Props) => {
  const [carrito, setCarrito] = useState<Cart[]>([]);
  const setCantidadProducto = (id: string) => {
    const index = carrito.findIndex((c) => c.idProducto.trim() === id.trim());
    if (index !== -1 && carrito[index]) {
      return carrito[index].cantidad;
    } else {
      return 0;
    }
  };
  const onSetCarrito = (cart: Cart) => {
    setCarrito((prev) => {
      const existe = prev.find(
        (c) => c.idProducto.trim() === cart.idProducto.trim(),
      );

      if (!existe) {
        return [...prev, cart];
      }

      return prev
        .map((c) => (c.idProducto === cart.idProducto ? cart : c))
        .filter((c) => c.cantidad > 0);
    });
  };
  const getTotalCantidad = () => {
    return carrito.reduce((acumulador, numeroActual) => {
      return acumulador + numeroActual.cantidad;
    }, 0);
  };
  const getTotalPrecio = () => {
    return carrito.reduce((acumulador, numeroActual) => {
      return acumulador + numeroActual.precio;
    }, 0);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, onSetCarrito, getTotalCantidad, getTotalPrecio,setCantidadProducto }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

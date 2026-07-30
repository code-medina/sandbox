import { useCarrito } from "../hooks/useCarrito";

export const Carrito = () => {
  const { carrito, getTotalCantidad, getTotalPrecio } = useCarrito();
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>{carrito.length > 0 ? "Carrito" : "Carrito vacio"}</h2>
      <ol>
        {carrito.map((c) => {
          return (
            <li key={c.idProducto} style={{ listStyle: "none" }}>
              Cantidad: {c.cantidad} Precio:{c.precio} Stock:{c.stock}
            </li>
          );
        })}
      </ol>
      {carrito.length > 0 && (
        <>
          <p>Total cantidad:{getTotalPrecio()}</p>
          <p>Total cantidad:{getTotalCantidad()}</p>
        </>
      )}
    </div>
  );
};

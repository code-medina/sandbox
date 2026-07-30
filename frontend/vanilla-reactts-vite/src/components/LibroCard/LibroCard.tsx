import type { Libro } from "../../types";
import { useCarrito } from "../../hooks/useCarrito";
import style from "./LibroCard.module.css";
export const LibroCard = ({
  id,
  titulo,
  descripcion,
  precio,
  autor,
  categoria,
  editorial,
  stock,
  imagen,
}: Libro) => {
  const { onSetCarrito, setCantidadProducto } = useCarrito();
  //const [counter, setCounter] = useState(setCantidadProducto(id));

  const handlerAddToCart = () => {
    //if (counter >= stock) return;

    //const nuevaCantidad = counter + 1;

    //setCounter(nuevaCantidad);

    const nuevaCantidad = setCantidadProducto(id) + 1;
    if (nuevaCantidad > stock) return;
    onSetCarrito({
      idProducto: id,
      cantidad: nuevaCantidad,
      precio,
      stock,
    });
  };
  const handlerRemoveFromCart = () => {
    //if (counter <= 0) return;

    //const nuevaCantidad = counter - 1;

    //setCounter(nuevaCantidad);

    const nuevaCantidad = setCantidadProducto(id) - 1;
    if (nuevaCantidad < 0) return;
    onSetCarrito({
      idProducto: id,
      cantidad: nuevaCantidad,
      precio,
      stock,
    });
  };
  return (
    <>
      <div
        style={{
          border: "2px solid grey",
          padding: "1rem",
          width: "300px",
          borderRadius: "5px",
        }}
        className={style.containerLibro}
      >
        <header>
          <h3>
            {titulo} de {autor.toUpperCase()}
          </h3>
          {imagen}-{id}
        </header>
        <main>
          <ul>
            <li style={{ listStyle: "none" }}>
              {" "}
              📃 Descripcion: {descripcion}
            </li>

            <li style={{ listStyle: "none" }}> 🏷️ Categoria: {categoria}</li>

            <li style={{ listStyle: "none" }}> 📍Editorial: {editorial}</li>

            <li style={{ listStyle: "none" }}> ✔️ Stock: {stock}</li>

            <li style={{ listStyle: "none" }}>💵 Precio: {precio}</li>
          </ul>
        </main>
        <footer>
          <button
            onClick={handlerAddToCart}
            style={{ padding: "3px", borderRadius: "5px" }}
          >
            ➕
          </button>
          <span style={{ padding: "3px" }}>{setCantidadProducto(id)}</span>
          <button
            onClick={handlerRemoveFromCart}
            style={{ padding: "3px", borderRadius: "5px" }}
          >
            ➖
          </button>
        </footer>
      </div>
    </>
  );
};

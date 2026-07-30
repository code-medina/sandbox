import type { Libro } from "../types";

type Props = {
  libros: Libro[];
  onClickDelete: (id: string) => void;
  onClickEdit: (libro: Libro) => void;
};
export const TableLibros = ({ libros, onClickDelete, onClickEdit }: Props) => {
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>titulo</th>
          <th>descripcion</th>
          <th>precio</th>
          <th>categoria</th>
          <th>autor</th>
          <th>editorial</th>
          <th>stock</th>
          <th>imagen</th>
          <th>delete</th>
          <th>edit</th>
        </tr>

        {libros.map((l) => {
          return (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.titulo}</td>
              <td>{l.descripcion}</td>
              <td>{l.precio}</td>
              <td>{l.categoria}</td>
              <td>{l.autor}</td>
              <td>{l.editorial}</td>
              <td>{l.stock}</td>
              <td>{l.imagen}</td>
              <td onClick={() => onClickDelete(l.id)}>🗑️</td>
              <td onClick={() => onClickEdit(l)}>✏️</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

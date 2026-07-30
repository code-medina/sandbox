import { useState } from "react";
import { useLibros } from "../hooks/useLibros";
import { FormLibro } from "../components/FormLibro/FormLibro";
import type { Libro } from "../types";

import {
  crearlibro,
  editLibro as editLibroDB,
  eliminarLibro,
} from "../services/libroService";
import { TableLibros } from "../components/TableLibros";
type ActionType = "list" | "new" | "edit" | "delete";

type LibroWithoutId = Omit<Libro, "id">;
export const Gestion = () => {
  const [editLibro, setEditLibro] = useState<Libro | null>(null);
  const { libros, onNewLibro, onDeleteLibro, onEditLibro } = useLibros();
  const [action, setAction] = useState<ActionType>("list");

  const handleClickNuevoLibro = (): void => setAction("new");
  const addNewLibro = async (libro: LibroWithoutId) => {
    console.log("en gestion ", libro);
    //validate
    try {
      //save in db
      const id = await crearlibro(libro);
      //actualizar libros
      onNewLibro({ ...libro, id });
      setAction("list");
    } catch (error) {
      console.log(error);
    }

    return;
  };

  const handleClickEditLibro = (libro: Libro) => {
    setAction("edit");
    setEditLibro(libro);
  };
  const actualizarLibro = async (data: LibroWithoutId) => {
    if (editLibro) {
      try {
        await editLibroDB(editLibro.id, data);
        //react
        onEditLibro(editLibro?.id, data);
      } catch (error) {
        console.log(error);
      }
    }
    setAction("list");
    setEditLibro(null);
  };
  return (
    <>
      <h2>Gestion de Libros</h2>
      {action === "edit" && (
        <FormLibro
          libro={editLibro}
          onCancel={() => {
            setEditLibro(null);
            setAction("list");
          }}
          onSubmit={actualizarLibro}
        ></FormLibro>
      )}
      {action == "new" && (
        <>
          <FormLibro
            libro={null}
            onCancel={() => setAction("list")}
            onSubmit={addNewLibro}
          ></FormLibro>
        </>
      )}

      {action == "list" && (
        <>
          <button onClick={handleClickNuevoLibro}>nuevo libro</button>
          <TableLibros
            libros={libros}
            onClickDelete={async (id) => {
              onDeleteLibro(id);
              await eliminarLibro(id);
            }}
            onClickEdit={handleClickEditLibro}
          ></TableLibros>
{/*           <table>
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
                  <td
                    onClick={async () => {
                      onDeleteLibro(l.id);
                      await eliminarLibro(l.id);
                    }}
                  >
                    🗑️
                  </td>
                  <td onClick={() => handleClickEditLibro(l)}>✏️</td>
                </tr>
              );
            })}
          </table> */}
        </>
      )}
    </>
  );
};

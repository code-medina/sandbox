import { useForm } from "../../hooks/useForm";
import type { Libro } from "../../types";
import style from "./FormLibro.module.css";
type Props = {
  libro: Libro | null;
  onCancel: () => void;
  onSubmit: (libro: Omit<Libro, "id">) => void;
};

export const FormLibro = ({ libro, onCancel, onSubmit }: Props) => {
  const { formState, onChangeInput } = useForm(
    libro || {
      titulo: "",
      descripcion: "",
      autor: "",
      categoria: "",
      editorial: "",
      precio: 0,
      stock: 0,
      imagen: "",
    },
  );

  const handlerSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("submit", formState);
    onSubmit(formState as Omit<Libro, "id">);
  };
  return (
    <>
      <h3>
        {libro == null
          ? "Complete campos para crear libro"
          : "Edito los campos que desee"}
      </h3>

      <form onSubmit={handlerSubmit} className={style.containerForm}>
        <div>
          <span>titulo</span>
          <input
            type="text"
            name="titulo"
            value={String(formState.titulo)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>descripcion</span>
          <input
            type="text"
            name="descripcion"
            value={String(formState.descripcion)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>autor</span>
          <input
            type="text"
            name="autor"
            value={String(formState.autor)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>categoria</span>
          <input
            type="text"
            name="categoria"
            value={String(formState.categoria)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>editorial</span>
          <input
            type="text"
            name="editorial"
            value={String(formState.editorial)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>precio</span>
          <input
            type="number"
            name="precio"
            value={Number(formState.precio)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>stock</span>
          <input
            type="number"
            name="stock"
            value={Number(formState.stock)}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <span>img url</span>
          <input
            type="text"
            name="imagen"
            value={String(formState.imagen)}
            onChange={onChangeInput}
          />
        </div>

        <button type="submit" style={{width:"20%"}}>guardar</button>
      </form>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </>
  );
};

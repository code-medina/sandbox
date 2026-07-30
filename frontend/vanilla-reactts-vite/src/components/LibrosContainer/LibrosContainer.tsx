import { useLibros } from "../../hooks/useLibros";
import { LibroCard } from "../LibroCard/LibroCard";

export const LibrosContainer = () => {
  const { libros, isLoading, error } = useLibros();
  return (
    <>
      <h2>Libros</h2>

      {isLoading && <p>cargando...</p>}
      <div
        style={{
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!error && libros.map((l) => <LibroCard key={l.id} {...l}></LibroCard>)}
      </div>
    </>
  );
};

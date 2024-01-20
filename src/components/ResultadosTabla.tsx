import { Inputs } from "../types/types";

interface ResultadosTablaProps {
  resultados: Inputs[];
}

export const ResultadosTabla: React.FC<ResultadosTablaProps> = ({
  resultados,
}) => {
  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
    </div>
  );
};

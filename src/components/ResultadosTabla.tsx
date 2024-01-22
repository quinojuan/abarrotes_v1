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
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio de venta</th>
            <th>Cantidad</th>
            <th>Importe</th>
            <th>Existencia</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((producto) => (
            <tr key={producto.codigo_de_barras}>
              <td>{producto.codigo_de_barras}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio_venta}</td>
              <td>{"Cantidad de unidades compradas (no puede ser superior a la cantidad_actual"}</td>
              <td>{"Cantidad de unidades x precio_de_venta"}</td>
              <td>{producto.cantidad_actual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

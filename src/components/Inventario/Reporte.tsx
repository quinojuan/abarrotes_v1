import axios from "axios";
import { useEffect, useState } from "react";
import { ModeloInventario } from "../../types/types";

export const Reporte = () => {
  const [inventario, setInventario] = useState<ModeloInventario>();

  useEffect(() => {
    axios("http://localhost:3000/inventario")
      .then((response) => {
        setInventario(response.data);
      })
      .catch((error) =>
        console.error("Error al obtener los datos de inventario", error)
      );
  }, []);
  return (
    <>
      <h4>REPORTE DE INVENTARIO</h4>
      <p>
        Costo de inventario:{" "}
        <span style={{ fontWeight: "bold" }}>
          $ {inventario?.costo_de_inventario}
        </span>
      </p>
      <p>
        Cantidad de productos en inventario:{" "}
        <span style={{ fontWeight: "bold" }}>
          {inventario?.cantidad_de_productos}
        </span>
      </p>
    </>
  );
};

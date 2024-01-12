import axios from "axios";
import { useEffect, useState } from "react";
import { ModeloInventario } from "../../types/types";
import useProducts from "../../hooks/useProducts";

export const Reporte = () => {
  const {productos} = useProducts();
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
  
  console.log(productos)
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
      <div>
        <br />
        <hr />
        <br />
      <h3>Tabla de Productos</h3>
      <table>
        <thead>
          <tr>
            <th>Código de Barras</th>
            <th>Descripción</th>
            <th>Precio de Costo</th>
            <th>Precio de Venta</th>
            <th>Cantidad Actual</th>
            <th>Mínimo</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.codigo_de_barras}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio_costo}</td>
              <td>{producto.precio_venta}</td>
              <td>{producto.cantidad_actual}</td>
              <td>{producto.minimo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

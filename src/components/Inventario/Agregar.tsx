import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { Inputs } from "../../types/types";
import axios from "axios";

export const Agregar = () => {
  const [foundProduct, setFoundProduct] = useState<null | Inputs>(null);
  const [cantidadAAgregar, setCantidadAAgregar] = useState("");
  const [codigoBarrasInput, setCodigoBarrasInput] = useState("");
  const { productos, loading, error } = useProducts();

  const obtenerInfoPorCodigoDeBarras = (codigoBarras: string) => {
    const productoEncontrado = productos.find(
      (producto) => producto.codigo_de_barras === codigoBarras
    );

    if (productoEncontrado) {
      setFoundProduct(productoEncontrado);
    } else {
      setFoundProduct(null);
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      obtenerInfoPorCodigoDeBarras(codigoBarrasInput);
    }
  };

  const fetchData = async () => {
    // verifico si el producto fue encontrado antes de enviarlo al backend
    if (foundProduct) {
      const data = {
        codigo_de_barras: codigoBarrasInput,
        cantidad_a_agregar: cantidadAAgregar,
      };
      console.log("mi producto quedó asi:", data);
      try {
        const response = await axios.post(
          "http://localhost:3000/inventario/updateproduct",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log("Producto actualizado exitosamente");
          alert(`Se agregaron ${cantidadAAgregar} al producto ${foundProduct?.descripcion}`);
        } else {
          console.log("Error al actualizar el producto");
          alert("Error al actualizar el producto");
        }
      } catch (error) {
        console.log("Error de red:", error);
        alert(error);
      }
    }
  };

  return (
    <>
      <h2 style={{ color: "purple" }}>AGREGAR INVENTARIO</h2>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <label htmlFor="codigo_de_barras">Código de barras</label>
          <input
            type="text"
            value={codigoBarrasInput}
            onChange={(e) => setCodigoBarrasInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <label htmlFor="descripcion">
          <span style={{ fontWeight: "bold" }}>Descripcion:</span>{" "}
          {foundProduct?.descripcion}
        </label>
        <label htmlFor="cantidad_actual">
          <span style={{ fontWeight: "bold" }}>Cantidad actual:</span>{" "}
          {foundProduct?.cantidad_actual}
        </label>
        {/* <button type="submit">Buscar</button> */}
      </form>
      <label htmlFor="cantidad_a_agregar">
        Cantidad a agregar:{" "}
        <input
          type="text"
          value={cantidadAAgregar}
          onChange={(e) => setCantidadAAgregar(e.target.value)}
        />
      </label>
      <button onClick={() => fetchData()}>Agregar a cantidad</button>
    </>
  );
};

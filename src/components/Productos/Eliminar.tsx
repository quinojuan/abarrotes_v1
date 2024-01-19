import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { Inputs } from "../../types/types";
import axios from "axios";

export const Eliminar = () => {
  const { productos } = useProducts();
  const [codigoDelProducto, setCodigoDelProducto] = useState("");
  const [productoEncontrado, setProductoEncontrado] = useState<Inputs | null>(
    null
  );

  const handleButton = () => {
    const productoEncontrado = productos.find(
      (producto) => producto.codigo_de_barras === codigoDelProducto
    );
    if (productoEncontrado) {
      setProductoEncontrado(productoEncontrado);
      console.log(productoEncontrado);
    } else {
      setProductoEncontrado(null);
      console.log("Producto no encontrado");
    }
  };

  const deleteProduct = async () => {
    if (!productoEncontrado) {
      console.log("No se ha encontrado un producto para eliminar.");
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:3000/productos/deleteproduct/${codigoDelProducto}`
      );

      if (response.data.success) {
        console.log(response.data.message);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  const cancelar = () => {
    setProductoEncontrado(null);
    setCodigoDelProducto("");
  };
  return (
    <>
      <div className="modificar-container">
        <h3>ELIMINAR PRODUCTO</h3>
        <p>Código del producto</p>
        <input
          type="text"
          value={codigoDelProducto}
          onChange={(e) => setCodigoDelProducto(e.target.value)}
        />
        <button onClick={() => handleButton()}>Aceptar</button>
      </div>
      <br />
      <hr />
      <br />
      {productoEncontrado && (
        <div>
          <p>Informacion del producto:</p>
          <div style={{ display: "flex" }}>
            <div>
              <p>Codigo: {productoEncontrado.codigo_de_barras}</p>
              <p>Descripcion: {productoEncontrado.descripcion}</p>
              <p>Como se vende: {productoEncontrado?.como_se_vende}</p>
              <p>Precio de costo: {productoEncontrado?.precio_costo}</p>
              <p>Precio de venta: {productoEncontrado?.precio_venta}</p>
              <p>Departamento: {productoEncontrado?.departamento}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}></div>
          </div>
          <div>
            <button onClick={deleteProduct}>Eliminar producto</button>
            <button onClick={cancelar}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};

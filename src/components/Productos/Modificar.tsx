import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { Inputs } from "../../types/types";
// import axios from "axios";

export const Modificar = () => {
  const { productos } = useProducts();
  const [codigoDelProducto, setCodigoDelProducto] = useState("");
  const [productoEncontrado, setProductoEncontrado] = useState<Inputs | null>(
    null
  );
  const [nuevoCodigoDeBarras, setNuevoCodigoDeBarras] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [comoSeVende, setComoSeVende] = useState("");
  const [precioCosto, setPrecioCosto] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [precioMayor, setPrecioMayor] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [utilizaInventario, setUtilizaInventario] = useState(true);
  const [cantidadActual, setCantidadActual] = useState("");
  const [minimo, setMinimo] = useState("");

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

  const productoActualizado = {
    ...productoEncontrado,
    codigo_de_barras:
      nuevoCodigoDeBarras || productoEncontrado?.codigo_de_barras,
    descripcion: nuevaDescripcion || productoEncontrado?.descripcion,
    como_se_vende: comoSeVende || productoEncontrado?.como_se_vende,
    precio_costo: precioCosto || productoEncontrado?.precio_costo,
    precio_venta: precioVenta || productoEncontrado?.precio_venta,
    precio_mayor: precioMayor || productoEncontrado?.precio_mayor,
    departamento: departamento || productoEncontrado?.departamento,
    utiliza_inventario:
      utilizaInventario || productoEncontrado?.utiliza_inventario,
    cantidad_actual: cantidadActual || productoEncontrado?.cantidad_actual,
    minimo: minimo || productoEncontrado?.minimo,
  };

  const updateProduct = async () => {
    if (!productoEncontrado) {
      console.log("No se ha encontrado un producto para actualizar.");
      return;
    }
    console.log(productoActualizado);
    // axios.post("http://localhost:3000/updateproduct", productoActualizado);
  };

  const cancelar = () => {
    setProductoEncontrado(null);
    setCodigoDelProducto("");
  };
  return (
    <>
      <div className="modificar-container">
        <h3>MODIFICAR PRODUCTO</h3>
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
              <p>Precio por mayor: {productoEncontrado?.precio_mayor}</p>
              <p>Departamento: {productoEncontrado?.departamento}</p>
              <p>
                Utiliza inventario:{" "}
                {productoEncontrado?.utiliza_inventario == true ? "SI" : "NO"}
              </p>
              <p>Cantidad actual: {productoEncontrado?.cantidad_actual}</p>
              <p>Mínimo: {productoEncontrado?.minimo}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                value={nuevoCodigoDeBarras}
                onChange={(e) => setNuevoCodigoDeBarras(e.target.value)}
                placeholder="Nuevo código de barras"
              />
              <input
                type="text"
                value={nuevaDescripcion}
                onChange={(e) => setNuevaDescripcion(e.target.value)}
                placeholder="Nueva descripcion"
              />
              <div className="row comoSeVende">
                <div>
                  <input
                    id="porPieza"
                    type="radio"
                    name="como_se_vende"
                    value={"porPieza"}
                    checked={comoSeVende === "porPieza"}
                    onChange={() => setComoSeVende("porPieza")}
                  />
                  <label htmlFor="porPieza"> Unidad</label>
                  <input
                    id="aGranel"
                    type="radio"
                    name="como_se_vende"
                    value={"aGranel"}
                    checked={comoSeVende === "aGranel"}
                    onChange={() => setComoSeVende("aGranel")}
                  />
                  <label htmlFor="aGranel"> Granel</label>
                  <input
                    id="comoPaquete"
                    type="radio"
                    name="como_se_vende"
                    value={"comoPaquete"}
                    checked={comoSeVende === "comoPaquete"}
                    onChange={() => setComoSeVende("comoPaquete")}
                  />
                  <label htmlFor="comoPaquete"> Paquete</label>
                </div>
              </div>
              <input
                type="text"
                value={precioCosto}
                onChange={(e) => setPrecioCosto(e.target.value)}
                placeholder="Nuevo Precio de costo"
              />
              <input
                type="text"
                value={precioVenta}
                onChange={(e) => setPrecioVenta(e.target.value)}
                placeholder="Nuevo Precio de venta"
              />
              <input
                type="text"
                value={precioMayor}
                onChange={(e) => setPrecioMayor(e.target.value)}
                placeholder="Nuevo Precio mayor"
              />
              <div className="row">
                <select
                  id="departamento"
                  onChange={(e) => setDepartamento(e.target.value)}
                >
                  <option>Seleccione un departamento</option>
                  <option value="ropaInterior">Ropa interior</option>
                  <option value="Remeras">Remeras</option>
                  <option value="pantalones">Pantalones</option>
                </select>
              </div>
              <div className="inventario">
                <input
                  id="utiliza_inventario"
                  type="checkbox"
                  checked={utilizaInventario}
                  onChange={(e) => {
                    setUtilizaInventario(e.target.checked);
                    console.log(e.target.checked);
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <button onClick={updateProduct}>Actualizar producto</button>
            <button onClick={cancelar}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};

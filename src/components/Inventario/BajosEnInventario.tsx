import useProducts from "../../hooks/useProducts";

export const BajosEnInventario = () => {
  const {productosBajosEnInventario} = useProducts();

  return (
    <>
      <h4>PRODUCTOS BAJOS EN INVENTARIO</h4>
      <p>A continuación se muestra un listado con productos con inventario debajo de su mínimo:
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
            <th>Precio de Venta</th>
            <th>Inventario</th>
            <th>Mínimo</th>
          </tr>
        </thead>
        <tbody>
          {productosBajosEnInventario.map((producto, index) => (
            <tr key={index}>
              <td>{producto.codigo_de_barras}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio_venta}</td>
              <td><span style={{color: "red"}}>{producto.cantidad_actual}</span></td>
              <td>{producto.minimo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

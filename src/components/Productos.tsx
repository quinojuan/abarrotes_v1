import { Boton } from "./Boton"

export const Productos = () => {
  return (
    <div>
      <h2>Productos</h2>
      <div>
        <Boton texto="Nuevo"/>
        <Boton texto="Modificar"/>
        <Boton texto="Eliminar"/>
        <Boton texto="Departamentos"/>
        <Boton texto="Ventas por período"/>
        <Boton texto="Promociones"/>
        <Boton texto="Importar"/>
      </div>
      <h3>NUEVO PRODUCTO</h3>
      <p>Producto</p>

    </div>
  )
}

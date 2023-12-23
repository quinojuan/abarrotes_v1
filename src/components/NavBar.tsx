import { Boton } from "./Boton"

export const NavBar = () => {
  return (
    <div className="flex justify-content-evenly mb-2">
        <Boton texto="Ventas"/>
        <Boton texto="Clientes"/>
        <Boton texto="Productos"/>
        <Boton texto="Inventario"/>
        <Boton texto="Configuracion"/>
        <Boton texto="Corte"/>
    </div>
  )
}

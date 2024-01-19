import { Boton } from "../Boton";
import { NavLink, Outlet } from "react-router-dom";

export const Productos = () => {
  return (
    <div className="container-productos">
      <h2>Productos</h2>
      <div>
        <NavLink to="nuevo">
          <Boton texto="Nuevo" />
        </NavLink>
        <NavLink to="modificar">
          <Boton texto="Modificar" />
        </NavLink>
        <NavLink to="eliminar">
          <Boton texto="Eliminar" />
        </NavLink>
        <Boton texto="Departamentos" />
        <Boton texto="Ventas por período" />
        <Boton texto="Promociones" />
        <Boton texto="Importar" />
      </div>
      <Outlet />
    </div>
  );
};

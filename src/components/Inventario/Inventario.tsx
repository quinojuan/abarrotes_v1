import { Boton } from "../Boton";
import { NavLink, Outlet } from "react-router-dom";

export const Inventario = () => {
  return (
    <>
      <h3 className="bg-indigo-300 text-white">INVENTARIO</h3>
      <div>
        <NavLink to="agregarinventario">
          <Boton texto="Agregar a Inv." />
        </NavLink>
        <NavLink to="ajustar">
          <Boton texto="Ajustes" />
        </NavLink>
        <NavLink to="bajoseninventario">
          <Boton texto="Productos bajos en Inventario" />
        </NavLink>
        <NavLink to="reporte">
          <Boton texto="Reporte de Inventario" />
        </NavLink>
        <Boton texto="Reporte de movimientos" />
      </div>
      <Outlet />
    </>
  );
};

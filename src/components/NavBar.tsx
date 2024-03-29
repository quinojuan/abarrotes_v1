import {
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { Boton } from "./Boton";
import { Sells } from "./Sells";
import { Productos } from "./Productos/Productos";
import { Clientes } from "./Clientes";
import { Inventario } from "./Inventario/Inventario";
import { Configuracion } from "./Configuracion";
import { Corte } from "./Corte";
import { Agregar } from "./Inventario/Agregar";
import { Reporte } from "./Inventario/Reporte";
import { Ajustes } from "./Inventario/Ajustes";
import { BajosEnInventario } from "./Inventario/BajosEnInventario";
import { Modificar } from "./Productos/Modificar";
import { Nuevo } from "./Productos/Nuevo";
import { Eliminar } from "./Productos/Eliminar";

export const NavBar = () => {
  return (
    <>
      <div className="flex justify-content-evenly mb-2">
        <NavLink to="/">
          <Boton texto="Ventas" />
        </NavLink>
        <NavLink to="/clientes">
          <Boton texto="Clientes" />
        </NavLink>
        <NavLink to="/productos">
          <Boton texto="Productos" />
        </NavLink>
        <NavLink to="/inventario">
          <Boton texto="Inventario" />
        </NavLink>
        <NavLink to="/configuracion">
          <Boton texto="Configuracion" />
        </NavLink>
        <NavLink to="/corte">
          <Boton texto="Corte" />
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Sells />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />}>
          <Route path="nuevo" element={<Nuevo />} />
          <Route path="modificar" element={<Modificar />} />
          <Route path="eliminar" element={<Eliminar />} />
        </Route>
        <Route path="/inventario" element={<Inventario />}>
          <Route path="agregarinventario" element={<Agregar />} />
          <Route path="reporte" element={<Reporte />} />
          <Route path="ajustar" element={<Ajustes />} />
          <Route path="bajoseninventario" element={<BajosEnInventario />} />
        </Route>
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/corte" element={<Corte />} />
      </Routes>
    </>
  );
};

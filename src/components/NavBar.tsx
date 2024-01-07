import {
  // Link,
  NavLink,
  Route,
  Routes,
  // useParams,
  // Outlet,
} from "react-router-dom";
import { Boton } from "./Boton";
import { Sells } from "./Sells";
import { Productos } from "./Productos";
import { Clientes } from "./Clientes";
import { Inventario } from "./Inventario";
import { Configuracion } from "./Configuracion";
import { Corte } from "./Corte";

export const NavBar = () => {
  return (
    <>
      <div className="flex justify-content-evenly mb-2">
        <NavLink to="/ventas">
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
        <Route path="/ventas" element={<Sells />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/corte" element={<Corte />} />
      </Routes>
    </>
  );
};

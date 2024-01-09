import axios from "axios";
import { useEffect, useState } from "react";
import { ModeloInventario } from "../../types/types";
import { Boton } from "../Boton";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { AgregarAInventario } from "./Agregar";

export const Inventario = () => {
  return (
    <>
      <h3 className="bg-indigo-300 text-white">INVENTARIO</h3>
      <div>
        <NavLink to="agregarinventario">
          <Boton texto="Agregar a Inv." />
        </NavLink>
        <Boton texto="Ajustes" />
        <Boton texto="Productos bajos en Inventario" />
        <Boton texto="Reporte de Inventario" />
        <Boton texto="Reporte de movimientos" />
      </div>
    </>
  );
};

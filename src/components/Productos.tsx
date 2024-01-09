import { useForm } from "react-hook-form";
import { Boton } from "./Boton";
import axios from "axios";
import { Inputs } from "../types/types";

export const Productos = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setValue,
    reset,
    watch,
  } = useForm<Inputs>({});

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    axios.post("http://localhost:3000/productos", data);
    reset();
  });

  return (
    <div className="container-productos">
      <h2>Productos</h2>
      <div>
        <Boton texto="Nuevo" />
        <Boton texto="Modificar" />
        <Boton texto="Eliminar" />
        <Boton texto="Departamentos" />
        <Boton texto="Ventas por período" />
        <Boton texto="Promociones" />
        <Boton texto="Importar" />
      </div>
      <h3>NUEVO PRODUCTO</h3>
      <p>Producto</p>
      <form className="form-productos" onSubmit={onSubmit}>
        <div className="row">
          <label htmlFor="codigo_de_barras">Codigo de barras</label>
          <input
            id="codigo_de_barras"
            type="text"
            {...register("codigo_de_barras", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="descripcion">Descripcion</label>
          <input
            id="descripcion"
            type="text"
            {...register("descripcion", {})}
          />
        </div>

        <div className="row comoSeVende">
          <label>Como se vende</label>
          <div>
            <input
              id="porPieza"
              type="radio"
              {...register("como_se_vende", {})}
              name="como_se_vende"
              value={"porPieza"}
              defaultChecked={true}
            />
            <label htmlFor="porPieza"> Unidad</label>
            <input
              id="aGranel"
              type="radio"
              {...register("como_se_vende", {})}
              name="como_se_vende"
              value={"aGranel"}
            />
            <label htmlFor="aGranel"> Granel</label>
            <input
              id="comoPaquete"
              type="radio"
              {...register("como_se_vende", {})}
              name="como_se_vende"
              value={"comoPaquete"}
            />
            <label htmlFor="comoPaquete"> Paquete</label>
          </div>
        </div>

        <div className="row">
          <label htmlFor="precio_costo">Precio costo</label>
          <input
            id="precio_costo"
            type="text"
            {...register("precio_costo", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="precio_venta">Precio venta</label>
          <input
            id="precio_venta"
            type="text"
            {...register("precio_venta", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="precio_mayor">Precio mayor</label>
          <input
            id="precio_mayor"
            type="text"
            {...register("precio_mayor", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="departamento">Departamento</label>
          <select id="departamento" {...register("departamento", {})}>
            <option value="ropaInterior">Ropa interior</option>
            <option value="Remeras">Remeras</option>
            <option value="pantalones">Pantalones</option>
          </select>
        </div>
        <p>
          <span></span>Inventario<span></span>
        </p>
        <div className="inventario">
          <input
            id="utiliza_inventario"
            type="checkbox"
            {...register("utiliza_inventario", {})}
          />
          <label htmlFor="utiliza_inventario">
            Este producto SI utiliza inventario
          </label>
        </div>
        <div className="row">
          <label htmlFor="cantidad_actual">Cantidad actual</label>
          <input
            id="cantidad_actual"
            type="text"
            {...register("cantidad_actual", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="minimo">Minimo</label>
          <input id="minimo" type="text" {...register("minimo", {})} />
        </div>
        <hr />
        <Boton texto="Guardar Producto" />

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
};

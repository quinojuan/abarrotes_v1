import { useForm } from "react-hook-form";
import { Boton } from "./Boton";

type Inputs = {
  codigoDeBarras: string;
  descripcion: string;
  comoSeVende?: string;
  precioCosto: string;
  precioVenta: string;
  precioMayor: string;
  departamento?: string;
  utilizaInventario: boolean;
  cantidadActual: string;
  minimo: string;
};

export const Productos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      comoSeVende: "porPieza",
    },
  });

  const onSubmit = handleSubmit((data, e) => {
    // e.preventDefault()
    console.log(data);

    // logica

  // if (data.descripcion) reset()
  reset()
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
          <label htmlFor="codigoDeBarras">Codigo de barras</label>
          <input
            id="codigoDeBarras"
            type="text"
            {...register("codigoDeBarras", {})}
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
              {...register("comoSeVende", {})}
              name="modoVenta"
              value={"porPieza"}
            />
            <label htmlFor="porPieza"> Unidad</label>
            <input
              id="aGranel"
              type="radio"
              {...register("comoSeVende", {})}
              name="modoVenta"
              value={"aGranel"}
            />
            <label htmlFor="aGranel"> Granel</label>
            <input
              id="comoPaquete"
              type="radio"
              {...register("comoSeVende", {})}
              name="modoVenta"
              value={"comoPaquete"}
            />
            <label htmlFor="comoPaquete"> Paquete</label>
          </div>
        </div>
        <div className="row">
          <label htmlFor="precioCosto">Precio costo</label>
          <input
            id="precioCosto"
            type="text"
            {...register("precioCosto", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="precioVenta">Precio venta</label>
          <input
            id="precioVenta"
            type="text"
            {...register("precioVenta", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="precioMayor">Precio mayor</label>
          <input
            id="precioMayor"
            type="text"
            {...register("precioMayor", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="departamento">Departamento</label>
          <select name="" id="departamento" {...register("departamento", {})}>
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
            id="utilizaInventario"
            type="checkbox"
            {...register("utilizaInventario", {})}
          />
          <label htmlFor="utilizaInventario">
            Este producto SI utiliza inventario
          </label>
        </div>
        <div className="row">
          <label htmlFor="cantidadActual">Cantidad actual</label>
          <input
            id="cantidadActual"
            type="text"
            {...register("cantidadActual", {})}
          />
        </div>
        <div className="row">
          <label htmlFor="minimo">Minimo</label>
          <input id="minimo" type="text" {...register("minimo", {})} />
        </div>
        <hr />
        <Boton texto="Guardar Producto"/>

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
};

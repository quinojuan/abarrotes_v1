import { useForm } from "react-hook-form";
import { Boton } from "./Boton";

type Inputs = {
  nombre: string;
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
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    // logica

    reset();
  });

  return (
    <div>
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
    </div>
  );
};

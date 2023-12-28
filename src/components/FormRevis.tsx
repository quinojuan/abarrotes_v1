import axios from "axios";
import { useForm } from "react-hook-form";

type Inputs = {
  fecha: Date;
  nombre: string;
  territorio: number;
  temaTratado: string;
  textosLeidos?: string;
  publicacion?: string;
  videos?: string;
  preguntaPendiente?: string;
};

export const FormRevis = () => {
  const fechaActual = new Date();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      fecha: fechaActual,
    },
  });

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    alert("enviando formulario");

    reset();

    // este es el momento donde envio mi data a un backend por ejemplo
    // axios.post("localhost:3001/usuario", data)
  });

  return (
    <form className="form-revisitas" onSubmit={onSubmit}>
      <label htmlFor="fecha">Fecha</label>
      {/* todos los campos que me devuelva esta funcion voy a asignarlos a este input */}
      <input type="date" {...register("fecha", {})} />

      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        {...register("nombre", {
          required: {
            value: true,
            message: "Se requiere un nombre",
          },
        })}
      />

      <label htmlFor="territorio">Nro de Territorio</label>
      <input
        type="text"
        {...register("territorio", {
          required: {
            value: true,
            message: "El territorio es requerido",
          },
        })}
      />

      <label htmlFor="temaTratado">Tema tratado</label>
      <input
        type="text"
        {...register("temaTratado", {
          required: {
            value: true,
            message: "Ingrese los detalles de la conversación ",
          },
        })}
      />

      <label htmlFor="textosLeidos">Textos leídos</label>
      <input type="text" {...register("textosLeidos", {})} />

      <label htmlFor="publicacion">Publicación que dejé</label>
      <input type="text" {...register("publicacion", {})} />

      <label htmlFor="videos">Videos mostrados</label>
      <input type="text" {...register("videos", {})} />

      <label htmlFor="preguntaPendiente">Pregunta o tema pendiente</label>
      <input type="text" {...register("preguntaPendiente", {})} />

      <button>Enviar</button>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
};

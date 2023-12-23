import { useForm } from "react-hook-form";

type Inputs = {
  nombre: string;
  correo: string;
  password: string;
  confirmarPassword: string;
  fechaNacimiento: string;
  pais: string;
  foto: string;
  terminos: boolean;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      {/* todos los campos que me devuelva esta funcion voy a asignarlos a este input */}
      <input
        type="text"
        {...register("nombre", {
          required: {
            value: true,
            message: "Nombre es requerido",
          },
          minLength: {
            value: 5,
            message: "Escriba un minimo de 5 caracteres",
          },
          maxLength: {
            value: 20,
            message: "Escriba un minimo de 20 caracteres",
          },
        })}
      />
      {errors.nombre && <span>{errors.nombre?.message}</span>}

      <label htmlFor="correo">Correo</label>
      <input type="email" {...register("correo")} />
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password")} />
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input type="password" {...register("confirmarPassword")} />
      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input type="date" {...register("fechaNacimiento")} />
      <label htmlFor="pais">Pais</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>
      <label htmlFor="foto"></label>
      <input type="file" {...register("foto")} />
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" {...register("terminos")} />
      <button className="btn-form">Enviar</button>
    </form>
  );
};

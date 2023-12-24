import axios from "axios";
import { useForm } from "react-hook-form";

// Al proporcionar un tipo genérico a useForm, estás especificando el tipo de los datos que esperas manejar en tu formulario, y esto afecta al tipado del objeto formState devuelto por useForm.

// Cuando proporcionas un tipo genérico, como en useForm<Inputs>(), TypeScript infiere y utiliza ese tipo para el estado del formulario. Por ejemplo:

// tsx
// Copy code
// type Inputs = {
//   nombre: string;
//   correo: string;
//   password: string;
//   // ... otros campos ...
// };

// };
// En este caso, formState tendrá un tipo específico que reflejará la estructura de tu objeto Inputs. Esto significa que cuando accedas a errors, TypeScript conocerá los nombres y tipos específicos de los campos del formulario y podrá proporcionar sugerencias y verificaciones de tipo más precisas.

type Inputs = {
  nombre: string;
  correo: string;
  password: string;
  confirmarPassword: string;
  fechaNacimiento: string;
  pais: string;
  provincia?: string;
  foto: string;
  terminos: boolean;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      pais: "ar",
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
            message: "Escriba un máximo de 20 caracteres",
          },
        })}
      />
      {errors.nombre && <span>{errors.nombre?.message}</span>}

      <label htmlFor="correo">Correo</label>
      <input
        type="email"
        {...register("correo", {
          required: {
            value: true,
            message: "Se requiere un correo electrónico",
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
            message: "Correo no válido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo?.message}</span>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "El password es requerido",
          },
        })}
      />
      {errors.password && <span>{errors.password?.message}</span>}

      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input
        type="password"
        {...register("confirmarPassword", {
          required: {
            value: true,
            message: "Repita el password por favor",
          },
          // validate: (value: any) => {
          //   if (value === watch("password")) {
          //     return true;
          //   } else {
          //     return "Las contraseñas no coinciden";
          //   }
          // },
          // A continuación una forma mas efectiva de hacer lo anterior.
          validate: (value: any) =>
            value === watch("password") || "Las contraseñas no coinciden",
        })}
      />
      {errors.confirmarPassword && (
        <span>{errors.confirmarPassword?.message}</span>
      )}

      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input
        type="date"
        {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "Se requiere una fecha de nacimiento",
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad =
              fechaActual.getFullYear() - fechaNacimiento.getFullYear();

            // if (edad >= 18) {
            //   return true;
            // } else {
            //   return "Debes ser mayor de edad";
            // }
            // Todo lo anterior se resume en la siguiente linea:

            return edad >= 18 || "Debe ser mayor de edad";
          },
        })}
      />
      {errors.fechaNacimiento && <span>{errors.fechaNacimiento?.message}</span>}

      <label htmlFor="pais">Pais</label>
      <select {...register("pais")}>
        <option value=""></option>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {watch("pais") == "ar" && (
        <>
          <input
            type="text"
            placeholder="Ingrese una provincia"
            {...register("provincia", {
              required: {
                value: true,
                message: "Si está en Argentina se requiere provincia",
              },
            })}
          />
          {errors.provincia && <span>{errors.provincia?.message}</span>}
        </>
      )}

      <label htmlFor="foto"></label>
      <input type="file" {...register("foto")} />
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" {...register("terminos")} />
      <button className="btn-form">Enviar</button>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
};

import "../estilos/Boton.css"

interface Props {
  texto: string;
  accion?: () => void;
}

export const Boton = ({texto, accion}: Props) => {
  return (
    <button className="chulo">{texto}</button>
  );
};
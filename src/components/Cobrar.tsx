import imgEfectivo from "../assets/images/efectivo.png";
import imgCredito from "../assets/images/credito.png";
import imgTarjeta from "../assets/images/tarjeta.png";
import { PagoEnEfectivo } from "./PagoEnEfectivo";

export const Cobrar = () => {
  return (
    <>
      <div>
        <h3 className="bg-blue-600 text-white">COBRAR</h3>
        <h2 className="text-center">Total a Cobrar</h2>
        <p className="text-blue-600 text-7xl text-center mb-3">$ 5.000</p>
        <div className="icons flex justify-content-around">
          <div className="flex flex-column align-items-center">
            <img src={imgEfectivo} alt="efectivo" />
            <figcaption>Efectivo</figcaption>
          </div>
          <div className="flex flex-column align-items-center">
            <img src={imgCredito} alt="credito" />
            <figcaption>Crédito</figcaption>
          </div>
          <div className="flex flex-column align-items-center">
            <img src={imgTarjeta} alt="tarjeta" />
            <figcaption>Tarjeta</figcaption>
          </div>
        </div>
        <PagoEnEfectivo />
        <hr />
      </div>
    </>
  );
};

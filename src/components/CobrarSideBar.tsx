export const CobrarSideBar = () => {
  return (
    <>
      <div className="flex flex-column justify-content-around align-items-center bg-blue-100 cobrarSideBarBtn">
        <button>Cobrar e Imprimir Ticket</button>
        <button>Cobrar sólo registrando la venta</button>
        <button>Cancelar</button>
        <button>Ingresar notas</button>
        <p className="text-4xl">Total de Artículos</p>
        <p className="text-blue-500 text-4xl">3</p>
      </div>
    </>
  );
};

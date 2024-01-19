import "../estilos/menu.css";

const comidas = [
  {
    hamburguesas: [
      {
        menu: "HAMBURGUESAS",
        comida: "COMUN",
        precio: "2500",
        descripcion: "Riquisima por donde la mires",
      },
      {
        menu: "HAMBURGUESAS",
        comida: "COMPLETA",
        precio: "3000",
        descripcion: "Riquisima por donde la mires",
      },
      {
        menu: "HAMBURGUESAS",
        comida: "ESPECIAL",
        precio: "3500",
        descripcion: "Riquisima por donde la mires",
      },
    ],
    milanesas: [{}, {}],
  },
];

export const Menu = () => {
  return (
    <>
      <div className="menu">
        <h2 className="menu-group-heading">HAMBURGUESAS</h2>
        <div className="menu-group">
          <div className="menu-item">
            <img
              // src={comida.precio}
              alt="Black Placeholder Image"
              className="menu-item-img"
            />
            <div className="menu-item-text">
              <h3 className="menu-item-heading">
                {/* <span className="menu-item-name">{comida.comida}</span> */}
                {/* <span className="menu-item-price">$ {comida.precio}</span> */}
              </h3>
              <p className="menu-item-desc">{/* {comida.descripcion} */}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { SearchBar } from "./SearchBar";
import { TableSells } from "./TableSells";

export const Sells = () => {
  return (
    <>
      <div>
        <h3 className="bg-blue-600 text-white">
          VENTA DE PRODUCTOS - Ticket 1
        </h3>
        <SearchBar />
        <hr />
        <div className="flex justify-content-evenly">
          <button>Varios</button>
          <button>Art. Común</button>
          <button>Buscar</button>
          <button>Mayoreo</button>
          <button>Entradas</button>
          <button>Salidas</button>
          <button>Borrar Art.</button>
        </div>
        <hr />
        <TableSells />
        <hr />
        <div className="flex align-items-center justify-content-end">
          <button className="mr-3">Cobrar</button>
          <label htmlFor="" className="text-blue-600 text-5xl w-3 text-right">$ 5.000</label>
        </div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { TableSells } from "./TableSells";
import { Inputs } from "../types/types";
import axios from "axios";
import { SearchBar } from "./SearchBar";

export const Sells = () => {
  const [products, setProducts] = useState<Inputs[]>([]);

  useEffect(() => {
    axios("http://localhost:3000/productos")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error al obtener los productos", error));
  }, []);
  console.log(products);
  return (
    <>
      <div>
        <h3 className="bg-blue-600 text-white">
          VENTA DE PRODUCTOS - Ticket 1
        </h3>

        {/* aca va el componente de la barra de busquedas */}
        <SearchBar />

        <hr />
        <div className="flex justify-content-evenly mt-2 mb-2">
          <button>Varios</button>
          <button>Art. Común</button>
          <button>Buscar</button>
          <button>Mayoreo</button>
          <button>Entradas</button>
          <button>Salidas</button>
          <button>Borrar Art.</button>
        </div>
        <hr />
        <TableSells
          barcode={1000}
          description="Buzo polar"
          quantity={8}
          sell_price={600}
        />
        <hr />
        <div className="flex align-items-center justify-content-end">
          <button className="mr-3">Cobrar</button>
          <label htmlFor="" className="text-blue-600 text-5xl w-3 text-right">
            $ 5.000
          </label>
        </div>
      </div>
    </>
  );
};

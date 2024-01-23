import { useState } from "react";
import { Inputs } from "../types/types";

interface BusquedaProductoProps {
  onSearch: (product: Inputs) => void;
}

export const BusquedaProducto: React.FC<BusquedaProductoProps> = ({
  onSearch,
}) => {
  const [codigoProducto, setCodigoProducto] = useState("");

  const handleSearch = () => {
    onSearch(codigoProducto);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Codigo del producto"
          value={codigoProducto}
          onChange={(e) => setCodigoProducto(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </>
  );
};

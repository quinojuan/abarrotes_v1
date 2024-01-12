import { useState } from "react";
import { Inputs, UseSearchBarProps, UseSearchBarResult } from "../types/types";

const useSearchBar = ({ productos }: UseSearchBarProps): UseSearchBarResult => {
  const [productCode, setProductCode] = useState<string>("");
  const [foundProduct, setFoundProduct] = useState<Inputs | null>(null);

  const handleProductSearch = () => {
    const product = productos.find(
      (product) => product.codigo_de_barras === productCode
    );

    if (product) {
      setFoundProduct(product);
      console.log("Producto encontrado: ", product);
    } else {
      setFoundProduct(null);
      console.log("Producto no encontrado");
    }
  };

  return {
    productCode,
    foundProduct,
    setProductCode,
    handleProductSearch,
  };
};

export default useSearchBar;
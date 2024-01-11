import { useState, useEffect } from "react";
import axios from "axios";
import { Inputs } from "../types/types";

const useProducts = () => {
  const [products, setProducts] = useState<Inputs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/productos");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los productos");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const searchProducts = (codigo: string) => {
    const filteredProducts = products.filter(
      (product) => product.codigo_de_barras === codigo
    );
    return filteredProducts;
  };

  return { products, loading, error, searchProducts };
};

export default useProducts;

import { useState, useEffect } from "react";
import axios from "axios";
import { Inputs } from "../types/types";

const useProducts = () => {
  const [productos, setProducts] = useState<Inputs[]>([]);
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

  const productosBajosEnInventario = productos.filter(({cantidad_actual, minimo}) => cantidad_actual <= minimo)

  return { productos, loading, error, productosBajosEnInventario };
};

export default useProducts;

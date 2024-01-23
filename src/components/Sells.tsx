import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { BusquedaProducto } from "./BusquedaProducto";
import { Inputs } from "../types/types";
import { ResultadosTabla } from "./ResultadosTabla";

export const Sells = () => {
  const { productos } = useProducts();
  const [cart, setCart] = useState<Inputs[]>([]);
  // console.log(productos);
  // const [resultados, setResultados] = useState<Inputs[]>([]);
  // const [total, setTotal] = useState(0);

  // const handleSearch = (codigo: string) => {
  //   const resultadoBusqueda = productos.filter((producto) =>
  //     producto.codigo_de_barras.includes(codigo)
  //   );
  //   setResultados((prevResultados) => [
  //     ...prevResultados,
  //     ...resultadoBusqueda,
  //   ]);
  // };
  // console.log(resultados);

  // const contarOcurrencias = resultados?.reduce((acumulador, producto) => {
  //   const codigo = producto.codigo_de_barras;

  //   if (acumulador[codigo]) {
  //     acumulador[codigo].cantidad += 1
  //   } else {
  //     acumulador[codigo] = {
  //       codigo_de_barras: codigo,
  //       cantidad: 1
  //     }
  //   }
  //   return acumulador
  // })

  // console.log(contarOcurrencias)

  // const sumartotal = (productos: Inputs[]) => {
  //   const suma = productos.reduce((acumulador: number, objeto) => {
  //     if (objeto.hasOwnProperty("precio_venta")) {
  //       acumulador += parseInt(objeto.precio_venta);
  //     }
  //     return acumulador;
  //   }, 0);
  //   return suma;
  // };

  // useEffect(() => {
  //   setTotal(sumartotal(resultados));
  // }, [resultados.length]);

  const handleSearch = (product: Inputs) => {
    // check if the adding product exist
    let findProudctInCart = cart.find((item) => {
      return item.codigo_de_barras === product.codigo_de_barras;
    });

    if (findProudctInCart) {
      let newCart: Inputs[] = [];
      let newItem;

      cart.forEach((carItem) => {
        if (carItem.codigo_de_barras === product.codigo_de_barras) {
          newItem = {
            ...carItem,
            quantity: carItem.precio_venta * (carItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(carItem);
        }
      });

      setCart(newCart);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.precio_venta,
      };
      setCart([...cart, addingProduct]);
    }
  };

  return (
    <>
      <div>
        <h3 className="bg-blue-600 text-white">
          VENTA DE PRODUCTOS - Ticket 1
        </h3>

        {/* aca va el componente de la barra de busquedas */}
        <BusquedaProducto onSearch={handleSearch} />
        <ResultadosTabla resultados={resultados} />
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

        <div className="flex align-items-center justify-content-end">
          <button className="mr-3">Cobrar</button>
          <label htmlFor="" className="text-blue-600 text-5xl w-3 text-right">
            {total}
          </label>
        </div>
      </div>
    </>
  );
};

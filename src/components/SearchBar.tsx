// import { useState } from "react";
// import useProducts from "../hooks/useProducts";
// import { Inputs } from "../types/types";

// export const SearchBar = ({onSearch}) => {
//   const [foundProduct, setFoundProduct] = useState<null | Inputs>(null);
//   const [codigoBarrasInput, setCodigoBarrasInput] = useState("");
//   const { productos, loading, error } = useProducts();

//   const obtenerInfoPorCodigoDeBarras = (codigoBarras: string) => {
//     const productoEncontrado = productos.find(
//       (producto) => producto.codigo_de_barras === codigoBarras
//     );

//     if (productoEncontrado) {
//       setFoundProduct(productoEncontrado);
//     } else {
//       setFoundProduct(null);
//     }
//   };

//   const handleKeyPress = async (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       obtenerInfoPorCodigoDeBarras(codigoBarrasInput);
//     }
//   };

//   return (
//     <>
//       <form action="" style={{ display: "flex", flexDirection: "column" }}>
//         <label htmlFor="codigo_de_barras">Código de barras</label>
//         <input
//           type="text"
//           value={codigoBarrasInput}
//           onChange={(e) => setCodigoBarrasInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//         />
//       </form>
//     </>
//   );
// };

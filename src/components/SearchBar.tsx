import { useState } from "react";

type Inputs = {
  codigo_de_barras: string;
  descripcion: string;
  comoSeVende?: string;
  precioCosto: string;
  precioVenta: string;
  precioMayor: string;
  departamento?: string;
  utilizaInventario: boolean;
  cantidadActual: string;
  minimo: string;
};

type SearchBarProps = {
  products: Inputs[];
};

export const SearchBar: React.FC<SearchBarProps> = ({ products }) => {
  const [productCode, setProductCode] = useState<string>("");
  const [foundProduct, setFoundProduct] = useState<Inputs | null>(null);

  const handleProductSearch = () => {
    const product = products.find(
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

  return (
    <>
      <div className="flex align-items-center mb-2 mt-2">
        <label htmlFor="">Codigo del producto</label>
        <input
          type="text"
          className="flex-grow-1 mr-2 ml-2"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
        />
        <button onClick={handleProductSearch}>Agregar Producto</button>
      </div>

      {foundProduct && (
        <div>
          <h2>Informacion del producto encontrado</h2>
          <p>Código: {foundProduct.codigoDeBarras}</p>
          <p>Descripcion: {foundProduct.descripcion}</p>
        </div>
      )}
    </>
  );
};

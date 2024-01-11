import axios from "axios";

export const Agregar = () => {

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productos");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
fetchData()
  return (
    <div>
      <h2>AGREGAR A INVENTARIO</h2>
      {/* <input
        type="text"
        placeholder="Buscar producto..."
        value={codigo}
        onChange={handleChange}
      />
      <button onClick={handleSearchClick}>Buscar producto...</button>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {searchResults.map((product) => (
        <div key={product.codigo_de_barras}>
          <p>Descripcion: {product.descripcion}</p>
          <p>Cantidad actual: {product.cantidad_actual}</p>
        </div>
      ))} */}
    </div>
  );
};

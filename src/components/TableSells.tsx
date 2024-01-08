interface Producto {
  barcode: number;
  description: string;
  sell_price: number;
  quantity: number;
}


export const TableSells = ( {barcode, description, quantity, sell_price}: Producto ) => {
  return (
    <>
      <table border={1} cellSpacing={1}>
        <thead>
          <tr>
            <th>Código de barras</th>
            <th>Descripcion del producto</th>
            <th>Precio de venta</th>
            <th>Cantidad</th>
            <th>Importe</th>
            <th>Existencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{barcode}</td>
            <td>{description}</td>
            <td>{sell_price}</td>
            <td>{quantity}</td>
            <td>{ sell_price * quantity }</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1001</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1002</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1003</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1004</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

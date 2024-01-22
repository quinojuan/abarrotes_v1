const productos = [
  {
    codigo_de_barras: "1000",
    como_se_vende: "porPieza",
    descripcion: "Parlantes genius",
    precio_costo: 1000,
    precio_venta: 3000,
    precio_mayor: 0,
    departamento: "accesorios",
    utiliza_inventario: 1,
    cantidad_actual: 50,
    minimo: 10,
  },
  {
    codigo_de_barras: "1001",
    como_se_vende: "porPieza",
    descripcion: "Teclado mecánico",
    precio_costo: 2000,
    precio_venta: 3500,
    precio_mayor: 0,
    departamento: "accesorios",
    utiliza_inventario: 1,
    cantidad_actual: 10,
    minimo: 2,
  },
  {
    codigo_de_barras: "1001",
    como_se_vende: "porPieza",
    descripcion: "Teclado mecánico",
    precio_costo: 2000,
    precio_venta: 3500,
    precio_mayor: 0,
    departamento: "accesorios",
    utiliza_inventario: 1,
    cantidad_actual: 10,
    minimo: 2,
  },
  {
    codigo_de_barras: "1001",
    como_se_vende: "porPieza",
    descripcion: "Teclado mecánico",
    precio_costo: 2000,
    precio_venta: 3500,
    precio_mayor: 0,
    departamento: "accesorios",
    utiliza_inventario: 1,
    cantidad_actual: 10,
    minimo: 2,
  },
  {
    codigo_de_barras: "1002",
    como_se_vende: "porPieza",
    descripcion: "Impresora chorro de tinta Epson",
    precio_costo: 500,
    precio_venta: 600,
    precio_mayor: 0,
    departamento: "pantalones",
    utiliza_inventario: 1,
    cantidad_actual: 15,
    minimo: 2,
  },
  {
    codigo_de_barras: "1003",
    como_se_vende: "porPieza",
    descripcion: "test",
    precio_costo: 10,
    precio_venta: 20,
    precio_mayor: 5,
    departamento: "Remeras",
    utiliza_inventario: 0,
    cantidad_actual: 20,
    minimo: 2,
  },
  {
    codigo_de_barras: "1003",
    como_se_vende: "porPieza",
    descripcion: "test",
    precio_costo: 10,
    precio_venta: 20,
    precio_mayor: 5,
    departamento: "Remeras",
    utiliza_inventario: 0,
    cantidad_actual: 20,
    minimo: 2,
  },
  {
    codigo_de_barras: "1004",
    como_se_vende: "porPieza",
    descripcion: "test2",
    precio_costo: 50,
    precio_venta: 65,
    precio_mayor: 35,
    departamento: "Remeras",
    utiliza_inventario: 0,
    cantidad_actual: 5,
    minimo: 1,
  },
  {
    codigo_de_barras: "1005",
    como_se_vende: "porPieza",
    descripcion: "Procesador Ryzen 5",
    precio_costo: 35000,
    precio_venta: 70000,
    precio_mayor: 0,
    departamento: "procesadores",
    utiliza_inventario: 1,
    cantidad_actual: 2,
    minimo: 1,
  },
  {
    codigo_de_barras: "1006",
    como_se_vende: "porPieza",
    descripcion: "Procesador i3",
    precio_costo: 5000,
    precio_venta: 10000,
    precio_mayor: 0,
    departamento: "procesadores",
    utiliza_inventario: 1,
    cantidad_actual: 1,
    minimo: 5,
  },
];

// const sumartotal = (productos) => {
//   const suma = productos.reduce((acumulador, objeto) => {
//     if(objeto.hasOwnProperty("precio_venta")) {
//       acumulador += objeto.precio_venta
//     }
//     return acumulador
//   }, 0)
//   return suma
// }

// console.log(sumartotal(productos));

// const contarOcurrencias = productos.reduce((acumulador, producto) => {
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

// const result = Object.values(contarOcurrencias)
// console.log(contarOcurrencias)
// console.log(result)

const addProductToCart = async (product) => {
  // check if the adding product exist
  let findProudctInCart = await cart.find((i) => {
    return i.id === product.id;
  });

  if (findProudctInCart) {
    let newCart = [];
    let newItem;

    cart.forEach((carItem) => {
      if (carItem.id == product.id) {
        newItem = {
          ...carItem,
          quantity: carItem.price * (carItem.quantity + 1),
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
      totalAmount: product.price,
    };
    setCart([...cart, addingProduct]);
  }
};

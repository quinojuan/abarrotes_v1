// types

export type Inputs = {
  codigo_de_barras: string;
  descripcion: string;
  como_se_vende?: string;
  precio_costo: string;
  precio_venta: string;
  precio_mayor: string;
  departamento?: string;
  utiliza_inventario: boolean;
  cantidad_actual: string;
  minimo: string;
};

export type ModeloInventario = {
  costo_de_inventario: string;
  cantidad_de_productos: string;
};

// interfaces
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

export type AgregarInputs = Omit<
  Inputs,
  | "descripcion"
  | "como_se_vende"
  | "precio_costo"
  | "precio_venta"
  | "precio_mayor"
  | "departamento"
  | "utiliza_inventario"
  | "minimo"
  | "cantidad_actual"
> & {
  cantidad_a_agregar: string;
};

export type ModeloInventario = {
  costo_de_inventario: string;
  cantidad_de_productos: string;
};

export type UseSearchBarProps = {
  products: Inputs[];
};

export type UseSearchBarResult = {
  productCode: string;
  foundProduct: Inputs | null;
  setProductCode: React.Dispatch<React.SetStateAction<string>>;
  handleProductSearch: () => void;
};



// interfaces

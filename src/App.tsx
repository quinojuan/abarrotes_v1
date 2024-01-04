import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Sells } from "./components/Sells";
import "/node_modules/primeflex/primeflex.css";
import "./index.css";
import { Cobrar } from "./components/Cobrar";
import { CobrarSideBar } from "./components/CobrarSideBar";
import { CreditoAClientes } from "./components/CreditoAClientes";
import { Boton } from "./components/Boton";
import { Productos } from "./components/Productos";
import { Form } from "./components/Form";
import { FormRevis } from "./components/FormRevis";

function App() {
  return (
    <>
      <div className="max-w-max">
        <Header />
        {/* <NavBar /> */}
        {/* <Sells/> */}
        {/* <div className="flex">
          <Cobrar />
          <CobrarSideBar /> */}
        {/* <CreditoAClientes /> */}
        {/* </div> */}
        <Productos/>
        {/* <Form /> */}
        {/* <Productos /> */}
        {/* <FormRevis /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

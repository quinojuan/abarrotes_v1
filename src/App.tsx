import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Sells } from "./components/Sells";
import "/node_modules/primeflex/primeflex.css";
import "./index.css";
import { Cobrar } from "./components/Cobrar";

function App() {
  return (
    <>
      <div className="max-w-max">
        <Header />
        <NavBar />

        <Cobrar/>
        
        <Footer />
      </div>
    </>
  );
}

export default App;

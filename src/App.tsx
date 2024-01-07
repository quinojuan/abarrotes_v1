import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "/node_modules/primeflex/primeflex.css";
import "./index.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="max-w-max">
        <Header />
        <NavBar />
        <Footer />
      </div>
    </>
  );
}

export default App;

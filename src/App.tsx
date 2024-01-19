// import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";
import "/node_modules/primeflex/primeflex.css";
import "./index.css";
// import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu.tsx";

function App() {
  return (
    <>
      <div className="max-w-max">
        {/* <Header />
        <NavBar />
        <Footer /> */}
        <Menu />
      </div>
    </>
  );
}

export default App;

import Contenedor from "./components/contenedor/contenedor";
import './App.css';
import Navegador from "./components/navegador/navegador";
import { Route, Routes } from "react-router-dom"
import Todolist from "./components/todolist/todolist";
import Comp1 from "./comp1/comp1"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div className="c1"><Contenedor /><Navegador /></div>} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/chakra" element={<Comp1 />} />
      </Routes>
    </>
  );
}

export default App;

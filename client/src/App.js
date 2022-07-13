import Contenedor from "./components/contenedor/contenedor";
import './App.css';
import Navegador from "./components/navegador/navegador";
import { Route, Routes } from "react-router-dom"
import Todolist from "./components/todolist/todolist";
function App() {
  return (
    <>
      <Routes>



        <Route path="/" element={<div className="c1"><Contenedor /><Navegador /></div>} />
        <Route path="/todo" element={<Todolist />} />
      </Routes>
    </>
  );
}

export default App;

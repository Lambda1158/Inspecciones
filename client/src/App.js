import Contenedor from "./components/contenedor/contenedor";
import './App.css';
import Navegador from "./components/navegador/navegador";
import { Route, Routes } from "react-router-dom"
import Todo from "./components/todo/todo";
function App() {
  return (
    <>
      <Routes>



        <Route path="/" element={<div className="c1"><Contenedor /><Navegador /></div>} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;

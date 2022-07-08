import React from "react"
import "./menu.css"
import { Link } from "react-router-dom";
export default function Menu() {
    return (
        <div class="menu">
            <a className="menu-item">Agregar</a>
            <Link to="/todo"><button className="menu-item">al Todo</button></Link>
            <a className="menu-item">Borrar</a>
        </div>
    )
}
import "./navegador.css"
import React from "react";
export default function Navegador() {

    return (
        <div class="item">
            <h3>{contenido}</h3>
            <p>fecha</p>
            <span>estado</span>
            <p>comentario</p>
            <button className="btn">anular</button>
        </div>
    )
}
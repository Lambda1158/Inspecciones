import React from "react";
import "./test.css"
export default function Test({ contenido }) {

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
import React from "react";
import "./test.css"
export default function Test({ contenido }) {

    return (
        <div class="item">
            <h3>{contenido}</h3>
            <button className="btn">click</button>
        </div>
    )
}
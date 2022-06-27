import React from "react"
import Test from "../prueba/test"
import "./contenedor.css"
export default function Contenedor() {
    return (
        <div class="contenedor">
            <Test contenido="inspector alfredo " />
            <Test contenido="inspector augusto
            " />
            <Test contenido="test" />
            <Test contenido="test" />
            <Test contenido="test" />
            <Test contenido="test" />
            <Test contenido="test" />
            <Test contenido="test" />
            <Test contenido="test" />
        </div>
    )
}
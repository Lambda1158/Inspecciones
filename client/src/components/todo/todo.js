import React from "react"
import Test from "../prueba/test"
import { Link } from "react-router-dom";
import "./todo.css"
export default function Todo() {
    return (
        <div class="todo">
            <h2>Todo</h2>
            <Link to="/"><button>take me back</button></Link>
        </div>
    )
}
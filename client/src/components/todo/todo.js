import React from "react"
import Test from "../prueba/test"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./todo.css"
export default function Todo() {
    let pepe = ["HOLA", "EVELYNN", "KAISA"]
    const [element, setElement] = useState("")
    const [array, setArray] = useState([])

    function handleCange(e) {
        e.preventDefault()
        setElement(e.target.value)
    }
    function handleClick(e) {
        e.preventDefault()
        setArray([...array, element])
        pepe = [...pepe, element]
        console.log(pepe)
        setElement("")

    }
    function crear() {
        return pepe.length > 1 ? pepe.map(e => <p id={`${e}`}>{e}</p>) : <p>no hay nada</p>
    }
    useEffect(() => {
        crear()
    }, [pepe])

    return (
        <div className="todo">
            <h2>Todo</h2>
            <label>Agregar un item</label>
            <br></br>
            <input
                className="input"
                type="text"
                id="elemento"
                autoComplete="off"
                placeholder="Agregar item...."
                value={element}
                onChange={(e) => handleCange(e)}
            />
            <button onClick={e => handleClick(e)}>agregar item</button>
            <br></br>
            {crear()}
            <Link to="/"><button>take me back</button></Link>
        </div>
    )
}
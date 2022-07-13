import React from "react"
import Test from "../prueba/test"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./todo.css"
export default function Todo(props) {
    const [input, setInput] = useState("")

    function handleCange(e) {
        e.preventDefault()
        setInput(e.target.value)
    }
    function handleClick(e) {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput("")
    }

    return (
        <form onSubmit={e => handleClick(e)}>
            <input
                className="input"
                type="text"
                autoComplete="off"
                placeholder="Agregar item...."
                value={input}
                onChange={(e) => handleCange(e)}
            />
            <button>agregar item</button>
        </form>
    )
}
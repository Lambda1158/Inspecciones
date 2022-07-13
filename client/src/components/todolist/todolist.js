import React from "react"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./todolist.css"
import Todo from "../todo/todo";
export default function Todolist() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }



        setTodos([todo, ...todos]);
    };


    return (
        <div className="todo">
            <h2>Todo</h2>
            <label>Agregar un item</label>
            <br></br>
            <Todo onSubmit={addTodo} />
            <br></br>
            {todos.length < 1 ? <p>no hay nada</p> : todos.map(e => <p key={e.id} id={e.id}>{e.text}</p>)}
            <Link to="/"><button>take me back</button></Link>
        </div>
    )
}
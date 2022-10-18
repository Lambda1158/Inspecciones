import React from "react"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./todolist.css"
import Todo from "../todo/todo";
import Item from "../item/item";
export default function Todolist() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        setTodos([todo, ...todos]);
    };

    const updatedItems = (itemId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos()
    }

    const completeItem = (id) => {
        let updatedItems = todos.map(e => {
            if (e.id === id) {
                e.isComplete = !e.isComplete
            }
            return e
        })
        setTodos(updatedItems)
    }
    const removeItem = (id) => {
        setTodos(todos.filter(e => e.id !== id))
    }
    console.log(todos)
    return (
        <div className="todo">
            <h2>Lista de inspecciones</h2>
            <label>Agregar un ejemplo</label>
            <br></br>
            <Todo onSubmit={addTodo} />
            <br></br>
            <Item
                items={todos}
                completeItem={completeItem}
                removeItem={removeItem}
            />
            <Link to="/"><button>take me back</button></Link>
        </div>
    )
}
import React, { useState } from "react";
import "./item.css"
import { IoIosCloseCircle } from "react-icons/io"
import { FiEdit } from "react-icons/fi"
import { TbArrowBack } from "react-icons/tb"
export default function Item({ items, completeItem, removeItem }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })
    return items.map((item, index) => (
        <div className={item.isComplete ? "item-completo" : "item-incompleto"} key={index}>
            <div key={item.id} onClick={() => completeItem(item.id)}>{item.text}</div>
            <div><IoIosCloseCircle onClick={() => removeItem(item.id)} /></div>
            <div><TbArrowBack onClick={() => completeItem(item.id)} /></div>
            <div><FiEdit conClick={() => setEdit({ id: item.id, value: item.text })} /></div>
        </div>
    ))
}
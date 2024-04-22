import './App.css'
import React, { useState } from "react";


//
const TodoList = () => {
    const initialTodos = [
        { id: 1, title: "Learn React", isChecked: false },
        { id: 2, title: "Get some Holy Energy", isChecked: false }
    ];

    // State
    const [todos, setTodos] = useState(initialTodos);

    // Handle behaviour
    const handleCheck = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) { // catch the right checkbox to update
                    return {
                        ...todo, // updating todo in changing state
                        isChecked: !todo.isChecked,
                    };
                } else {
                    return todo;
                }
            })
        );
    };



    // Render
    return (
        <>
            <section className="top">
                <h1>My Todo app</h1>
                <input type="text" name="text" id="text" placeholder="Learn React" />
                <input type="submit" value="Add task" />
            </section>
            <hr></hr>
            <h3>Todos</h3>
            <section className="todos">
                <ul>
                    {todos.map((todo) => (
                        // Assign a unique key to each list item 
                        <li key={todo.id}>
                            <input type="checkbox" name="myCheckBox" checked={todo.isChecked} onChange={() => handleCheck(todo.id)} /> {todo.title}
                        </li>
                    ))}
                </ul>
            </section>
        </>


    );
}

export default TodoList

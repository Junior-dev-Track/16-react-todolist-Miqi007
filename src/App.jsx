import './App.css'
import React, { useState } from "react";

const TodoList = () => {

    // Data
    const initialTodos = [
        { id: 1, title: "Learn React", isChecked: false },
        { id: 2, title: "Get some Holy Energy", isChecked: false }
    ];

    // State
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState("");

    // Handle behaviour
    // Check if a todo is done
    const handleCheck = (id) => {
        setTodos(

            todos.map((todo) => {
                if (todo.id === id) { // catch the right checkbox to update
                    return {
                        ...todo, // updating todo in changing state => copy not original => immutability
                        isChecked: !todo.isChecked,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    // Delete a todo 
    const handleDelete = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id), // delete the item based on his id
        )
    }

    //Add new todo in li
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime(); // id unique
        const newTodoItem = { id, title: newTodo, isChecked: false }; // define new todo item

        setTodos(prevTodos => [...prevTodos, newTodoItem]); // add it on the todo list
        setNewTodo(""); // empty input after submit
    }


    //Handle change in the input
    const handleChange = (event) => {
        setNewTodo(event.target.value) //value of the input set in the setter
    }





    // Render
    return (
        <>
            <section className="top">
                <h1>My Todo app</h1>
                <form action="submit" onSubmit={handleSubmit}>
                    <input value={newTodo} type="text" name="text" id="text" placeholder="Learn React" onChange={handleChange} />
                    <input onSubmit={handleSubmit} type="submit" value="Add task" />
                </form>
            </section>
            <hr></hr>
            <h3>Todos</h3>
            <section className="todos">
                <ul>
                    {todos.map((todo) => (
                        // Assign a unique key to each list item 
                        <li key={todo.id}>
                            <input type="checkbox" name="myCheckBox" checked={todo.isChecked} onChange={() => handleCheck(todo.id)} />
                            <span style={{ textDecoration: todo.isChecked ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </>


    );
}

export default TodoList

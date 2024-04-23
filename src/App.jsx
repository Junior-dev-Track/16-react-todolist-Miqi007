import './App.css';
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

const LSKEY = "MyTodoApp";


const TodoList = () => {

    // Retrieve todos from localStorage on component mount
    const storedTodos = window.localStorage.getItem(LSKEY + ".todos");
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];

    // State
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState(parsedTodos);



    // Handle behaviour
    // Check if a todo is done
    const handleCheck = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
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
            todos.filter((todo) => todo.id !== id),
        )
    }

    // Add new todo in li
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const newTodoItem = { id, title: newTodo, isChecked: false };

        setTodos(prevTodos => [...prevTodos, newTodoItem]);
        setNewTodo("");
    }

    // Handle change in the input
    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]); // Run this effect only when todos change



    // Render
    return (
        <>
            <section className="top">
                <h1>My Todo app</h1>
                <Form submitForm={handleSubmit} inputChange={handleChange} todosInfos={newTodo} />
            </section>
            <hr></hr>

            <section className="todos">
                <h3>Todos</h3>
                <ul>
                    {todos.map((todo) => (
                        <ToDoList todoInfos={todo} checkbox={handleCheck} deleteTodo={handleDelete} />
                    ))}
                </ul>
            </section>
        </>
    );

}

export default TodoList;

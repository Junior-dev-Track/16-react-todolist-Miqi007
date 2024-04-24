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
    const [errorMessage, setErrorMessage] = useState('');


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
        // First, find the todo item with the specified id
        const todoToDelete = todos.find(todo => todo.id === id);

        // Check if the todo item exists and if it's checked
        if (todoToDelete && !todoToDelete.isChecked) {
            setErrorMessage("Task not completed ❌");
        } else {
            // If the todo item doesn't exist or is checked, filter it out
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
            setErrorMessage("");
        }
    };





    // Add new todo in li
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const newTodoItem = { id, title: newTodo, isChecked: false };
        if (newTodoItem.title != "") {
            setTodos(prevTodos => [...prevTodos, newTodoItem]);
            setNewTodo("");
            setErrorMessage("");
        } else {
            setErrorMessage('Empty task not allowed ⛔');

        }
    }

    // Handle change in the input
    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    // Save item in localstorage
    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]); // Run this effect only when todos change

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        );
    };

    // Render
    return (
        <>
            <section className="top">
                <h1>My Todo app</h1>
                <Form submitForm={handleSubmit} inputChange={handleChange} todosInfos={newTodo} />
                {errorMessage && <div className="error"> {errorMessage} </div>}
            </section>
            <hr></hr>

            <section className="todos">
                <h3>Todos</h3>
                <ul>
                    {todos.map((todo) => (
                        <ToDoList todoInfos={todo} checkbox={handleCheck} deleteTodo={handleDelete} setUpdate={setUpdate} />
                    ))}
                </ul>
            </section>
        </>
    );

}

export default TodoList;

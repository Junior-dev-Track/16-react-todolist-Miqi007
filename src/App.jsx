import './App.css'
import { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
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
        setNewTodo(""); // Clear the input field
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

export default TodoList

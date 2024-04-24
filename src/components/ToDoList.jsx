import { useState } from "react";

export default function ToDoList({ todoInfos, checkbox, deleteTodo, setUpdate }) {

    const [editing, setEditing] = useState(false);
    const [inputValue, setInputValue] = useState(todoInfos.title);

    // Edit item
    const handleEditing = () => {
        setEditing(true);
        setInputValue(todoInfos.title); // Set the input value to the current todo title
    }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
            setUpdate(inputValue, todoInfos.id); // Update the todo title using the setUpdate function
        }
    };

    // Toggle display styles
    const viewMode = editing ? { display: 'none' } : {};
    const editMode = editing ? {} : { display: 'none' };


    //render
    return (
        <li key={todoInfos.id}>
            <div className="view" style={viewMode}>
                <label className="custom-checkbox">
                    <input type="checkbox" name="myCheckBox" checked={todoInfos.isChecked} onChange={() => checkbox(todoInfos.id)} />
                    <span className="checkmark"></span>
                </label>
                <span style={{ textDecoration: todoInfos.isChecked ? 'line-through' : 'none' }}>{todoInfos.title}</span>
                <button onClick={() => deleteTodo(todoInfos.id)}>Delete</button>
                <button onClick={handleEditing}>Edit</button>
            </div>
            <input type="text" value={inputValue} className="textInput" style={editMode} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleUpdatedDone} />
        </li>
    )
}
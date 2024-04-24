export default function ToDoList({ todoInfos, checkbox, deleteTodo }) {

    //render
    return (
        <li key={todoInfos.id} >
            <label className="custom-checkbox">
                <input type="checkbox" name="myCheckBox" checked={todoInfos.isChecked} onChange={() => checkbox(todoInfos.id)} />
                <span className="checkmark"></span>
            </label>
            <span style={{ textDecoration: todoInfos.isChecked ? 'line-through' : 'none' }}>{todoInfos.title}</span>
            <button onClick={() => deleteTodo(todoInfos.id)}>Delete</button>
        </li>
    )
}
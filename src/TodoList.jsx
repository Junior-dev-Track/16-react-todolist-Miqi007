const TodoList = () => {
    return (
        <>
            <h1>My Todo app</h1>
            <input type="text" name="text" id="text" placeholder="Learn React" />
            <hr></hr>
            <h3>Todos</h3>
            <input type="checkbox" name="todos" id="todos" />
            <label htmlFor="todos">Learn React</label>
            <input type="checkbox" name="todos2" id="todos2" />
            <label htmlFor="todos2">Get some rest</label>
        </>


    );
}

export default TodoList
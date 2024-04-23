export default function Form({ submitForm, todosInfos, inputChange }) {
    return (
        <form onSubmit={submitForm}>
            <input value={todosInfos} type="text" name="text" id="text" placeholder="What do you have to do ?" onChange={inputChange} />
            <input type="submit" value="Add task" />
        </form>
    );
}

export default function Form({ submitForm, todosInfo, inputChange }) { // destructuring the props
    // state
    // const submitForm = props.submitForm;
    // const todosInfo = props.todosInfo;
    // const inputChange = props.inputChange;
    //behaviour

    //render
    return (
        <form action="submit" onSubmit={submitForm}>
            <input value={todosInfo} type="text" name="text" id="text" placeholder="Learn React" onChange={inputChange} />
            <input onSubmit={submitForm} type="submit" value="Add task" />
        </form>
    );

}

// eslint extension wasn't happy without that
// it's not mandatory
import PropTypes from 'prop-types';

Form.propTypes = {
    inputChange: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
    todosInfo: PropTypes.string.isRequired,
};
import React, {useState} from "react";
import { connect } from "react-redux";
import { addTodoReq } from "../Redux/thunks";
import '../Styling/NewTodoForm.css'
import {getTodos} from "../Redux/selectors";

const NewTodoForm = ({todos,onCreatePressed}) =>{
    const [inputValue, setInputValue ] = useState("");
    return(
        <div className="new-todo-form">
            <input 
            className="new-todo-input"  
            type="text" 
            value={inputValue}
            placeholder="Type your new to do"
            onChange={event => setInputValue(event.target.value)}
            />
            <button
                onClick={ () => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText && inputValue){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }} 
                className="new-todo-button">Create Todo
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoReq(text))
});


export default  connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);
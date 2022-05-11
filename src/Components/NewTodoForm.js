import React, {useState} from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { addTodoReq } from "../Redux/thunks";
import {getTodos} from "../Redux/selectors";

const NewTodoFormBox = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`
const NewTodoInput =styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`
const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`
const NewTodoForm = ({todos,onCreatePressed}) =>{
    const [inputValue, setInputValue ] = useState("");


    return(
        <NewTodoFormBox>
            <NewTodoInput 
            className="new-todo-input"  
            type="text" 
            value={inputValue}
            placeholder="Type your new to do"
            onChange={event => setInputValue(event.target.value)}
            />
            <NewTodoButton
                onClick={ () => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText && inputValue){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }} 
                className="new-todo-button">Create Todo
            </NewTodoButton>
        </NewTodoFormBox>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoReq(text))
});


export default  connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);
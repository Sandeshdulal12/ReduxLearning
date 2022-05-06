import React, {useState} from "react";
import '../Styling/NewTodoForm.css'

const NewTodoForm = () =>{
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
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
}

export default  NewTodoForm;
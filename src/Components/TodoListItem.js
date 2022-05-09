import React from "react";
import '../Styling/TodoListItem.css'
const TodoListItem = ({todo, onRemovePressed, onCompletePressed})=>{
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {
                todo.isCompleted ? 
                    null :
                    <button 
                    onClick={() => onCompletePressed(todo.id)}
                    className="complete-button">
                        Mark As Completed
                        </button>
                        }
                <button 
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">
                    Remove
                </button>
            </div>
        </div>
    );
}

export default TodoListItem;
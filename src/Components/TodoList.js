import React from "react";
import TodoListItem from './TodoListItem'
import NewtodoForm from "./NewTodoForm";
import '../Styling/TodoList.css'

const TodoList = ({todos = [{text:"Hello"}] }) => {

    return(
        <div className="List-wrapper">
            <NewtodoForm />
            {todos.map(todo =>{
                <TodoListItem todo={todo} />
            })}
        </div>
    );
}

export default TodoList;
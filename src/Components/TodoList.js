import React, {useEffect} from "react";
import TodoListItem from './TodoListItem'
import NewtodoForm from "./NewTodoForm";
import '../Styling/TodoList.css';
import { connect } from "react-redux";
import {getTodos, getTodosLoading} from "../Redux/selectors";
import { completeTodoReq, loadTodos, removeTodoReq } from "../Redux/thunks";



const TodoList = ({todos,isLoading,onRemovePressed,onCompletePressed,startLoading }) => {
    useEffect(()=>{
        startLoading();
    },[]);
    const loadingMessage = <div>Loading todos list</div>
    const content = (
        <div className="List-wrapper">
            <NewtodoForm />
            {console.log(todos)}
            {todos.map((todo,num) =>
                <TodoListItem  
                onCompletePressed={onCompletePressed} 
                onRemovePressed={onRemovePressed} 
                key={num} 
                todo={todo} />
            )}
        </div>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    todos: state.todos.data,
    isLoading: state.todos.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoReq(id)),
    startLoading: ()=> dispatch(loadTodos()),
    onCompletePressed: id => dispatch(completeTodoReq(id)),

});


export default  connect(mapStateToProps,mapDispatchToProps)(TodoList);
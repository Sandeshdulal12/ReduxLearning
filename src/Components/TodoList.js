import React, {useEffect} from "react";
import styled from 'styled-components';
import TodoListItem from './TodoListItem'
import NewtodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import {getCompletedTodos, getIncompleteTodos, getTodosLoading} from "../Redux/selectors";
import { completeTodoReq, loadTodos, removeTodoReq } from "../Redux/thunks";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const TodoList = ({incompleteTodos, completedTodos, isLoading,onRemovePressed,onCompletePressed,startLoading }) => {
    useEffect(()=>{
        startLoading();
    },[]);
    const loadingMessage = <div>Loading todos list</div>
    const content = (
        <ListWrapper>
            <NewtodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo,num) =>
                <TodoListItem  
                onCompletePressed={onCompletePressed} 
                onRemovePressed={onRemovePressed} 
                key={num} 
                todo={todo} />
            )}
            <h3>Completed:</h3>
            {completedTodos.map((todo,num) =>
                <TodoListItem  
                onCompletePressed={onCompletePressed} 
                onRemovePressed={onRemovePressed} 
                key={num} 
                todo={todo} />
            )}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    incompleteTodos: getIncompleteTodos(state),
    completedTodos: getCompletedTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoReq(id)),
    startLoading: ()=> dispatch(loadTodos()),
    onCompletePressed: id => dispatch(completeTodoReq(id)),

});


export default  connect(mapStateToProps,mapDispatchToProps)(TodoList);
import { createTodo, loadFail, loading, loadSucess, removeTodo,completeTodo } from "./actions";

export const loadTodos = ()=> async (dispatch) => {
    try{
    dispatch(loading());
    const response = await fetch('http://localhost:5000/todos',
    {
        method: "GET"
    });
    const todos = await response.json();
    dispatch(loadSucess(todos));
    } catch (error){
        dispatch(loadFail(error));
        dispatch(displayAlert(error));
    }
}

export const addTodoReq = (text)=> async (dispatch) => {
    try{
    const body = JSON.stringify({text})
    const response = await fetch('http://localhost:5000/todos',
    {
        headers:{
            'Content-Type': 'application/json',
        },
        method: "post",body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
    } catch (error){
        dispatch(displayAlert(error));
    }
}

export const removeTodoReq = (id)=> async (dispatch) => {
    try{
    await fetch(`http://localhost:5000/todos/${id}`,{    
        method: 'delete',
    }
    );
    dispatch(removeTodo(id));
    } catch (error){
        dispatch(displayAlert(error));
    }
}

export const completeTodoReq = (id)=> async (dispatch) => {
    try{
    const response = await fetch(`http://localhost:5000/todos/${id}/completed`,
    {
        method: "post",
    });
    const updatedTodo = await response.json();
    dispatch(completeTodo(updatedTodo));
    } catch (error){
        dispatch(displayAlert(error));
    }
}

export const displayAlert =(error)=> () => {
    alert(`Error: ${error}`);
};
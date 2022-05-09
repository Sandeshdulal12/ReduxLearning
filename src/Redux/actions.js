export const CREATE_TODO = 'CREATE_TODO';

//This below is the action creator
export const createTodo = todo => ({ 
    type: CREATE_TODO,
    payload: {todo},
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: {id},
});

export const COMPLETED_TODO = 'COMPLETED_TODO';

export const completeTodo = todo => ({
    type: COMPLETED_TODO,
    payload: {todo},
});

export const LOAD_SUCCESS = 'LOAD_SUCCESS';

export const loadSucess = todos => ({
    type: LOAD_SUCCESS,
    payload: {todos},
});

export const LOAD_FAIL = 'LOAD_FAIL';

export const loadFail = error => ({
    type: LOAD_FAIL,
    payload: {error},
});

export const LOADING = 'LOADING';

export const loading = () => ({
    type: LOADING,
});
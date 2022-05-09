import { COMPLETED_TODO, CREATE_TODO, LOADING, LOAD_FAIL, LOAD_SUCCESS, REMOVE_TODO } from "./actions";



const initialState = {isLoading:false,data : [] }
export const todos = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO:{
            const {todo}= payload;
            return {
                ...state,
                data: state.data.concat(todo)
            }
        }
        case REMOVE_TODO:{
            const {id} = payload;
            return {
                ...state,
                data: state.data.filter(item => item.id !== id)
            };
        }
        case COMPLETED_TODO:{
            const {todo: updatedTodo} = payload;
            return {
                ...state,
                data: state.data.map(item => {
                    if(item.id === updatedTodo.id){
                        return updatedTodo;
                }
                return item
            }),
        }
        }
        case LOAD_SUCCESS:{
            const {todos} = payload;
            return {
                ...state,
                isLoading:false,
                data:todos,
            }
        }
        case LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case LOAD_FAIL:
            return{
                ...state,
                isLoading:false,
            }
        default:{
                return state;
        }
    }

}


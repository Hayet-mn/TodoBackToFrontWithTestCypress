import {  GET_TASKS ,TASK_ERROR, REMOVE_TASK, ADD_TASK,UPDATE_TASK} from "../actions/types";

const initialState = {
  todos: [{title:'test', description: 'test'}],
  loading: true,
  error: {}
 
}
  export const todoReducer = (state = initialState, action)  => {
    const {type, payload} = action;
    switch(type){
      case GET_TASKS:
        return{
          ...state,
          todos: payload,
          loading: false
         

        }
       case REMOVE_TASK:
        return{
          ...state,
          todos: state.todos.filter( todo => todo._id !== payload),
          loading: false
        }
        case ADD_TASK: 
        return {
            ...state,
            todos: [payload, ...state.todos],
            loading: false,
          }
          {/*case UPDATE_TASK:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === payload.id ? { ...todo, todos:
                     payload.todos} : todo),
                     loading: false
            }*/}

        case TASK_ERROR:
          return{
            ...state,
            error: payload,
            loading: false
          };
          default:
            return state;
    }
 }

 
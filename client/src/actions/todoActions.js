import axios from 'axios';
import {  GET_TASKS ,TASK_ERROR, REMOVE_TASK, ADD_TASK,UPDATE_TASK} from "./types";

//get todos
export const getTodos = ()  =>  async dispatch  => {
    try{
    
        const res = await axios.get('/api/todo');
        dispatch({
            type: GET_TASKS,
     
            payload: res.data
        });
        console.log(JSON.stringify(res.data))

    } catch(err){
        dispatch({
            type: TASK_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
    console.log('hgggi/todo');
}


// DELETE Todo
export const deleteTodo = id => async dispatch => {

    try{
         await axios.delete(`/api/todo/${id}`);

        dispatch({
            type:  REMOVE_TASK,
            payload: id

        });
    } 
    catch (err) {

        dispatch({
            type: TASK_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// ADD Todo
export const addTodo = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
        try{
            const res = await axios.post('/api/todo', formData, config);
    
            dispatch({
                type: ADD_TASK,
                payload: res.data
    
            });
    
           
        } 
        catch (err) {
    
            dispatch({
                type: TASK_ERROR,
                 payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    };

    // UPDATE TODO
    
    {/*export const updateTodo = (id, payload) => async dispatch => {

        try{
            const res = await axios.put(`/api/todo/${id}`, payload);

            dispatch({
                type: UPDATE_TASK,
                payload: { id, payload: res.data}
    
            });
        } 
        catch (err) {
    
            dispatch({
                type: TASK_ERROR,
                 payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    };*/}

    export const updateTodo = (id, payload) => async dispatch => {
        try {
          await axios.put(`/api/todo/${id}`, payload);
          dispatch(getTodos());
        } catch (err) {
          console.error(err);
        }
      };
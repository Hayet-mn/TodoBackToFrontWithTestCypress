import React, { Fragment, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import {  getTodos } from '../actions/todoActions';
import Spinner from './Spinner';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const Todos = () => {
    const loading = useSelector(state => state.loading)
    const todos = useSelector(state => state.todos)
  
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getTodos());
    }, [dispatch]);
   
    return   loading ?  <Spinner /> :  <Fragment> 
           <div className="todo"> 
           <h1 className="title">Todo List</h1> 
           <div>
            <TodoForm />
           </div>
           <div className="listeTodo">     {todos.map(todo => <TodoItem key={todo._id} todo={todo} />)}
            </div> 
            </div>

        </Fragment> 

};

export default Todos
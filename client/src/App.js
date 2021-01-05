import React, {Fragment} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import store from './store';
import {Provider} from 'react-redux';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';
import './App.css';


const  App=() =>{
  

    return (
      <Provider store={store}>
      <Router>
        <Fragment>
        <Route exact path='/' component={Todos}/>
        <Route exact path="/edit-todo/:id" component={EditTodo} />
        </Fragment>
        </Router>
        </Provider> 
    );
  };
  
  export default App;
  
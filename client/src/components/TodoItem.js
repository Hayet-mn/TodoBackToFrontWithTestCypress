import React from 'react'
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/todoActions'

const TodoItem = ({deleteTodo, todo:{ _id, title, description}}) => {
    return (
      <div className="todoItem" >
      <div className="itemDesc" >
      
      
      <div><h3 > {title}</h3>
      <p > {description}</p></div>
      </div>
      <div className="itemEdit">
      <Link to={`/edit-todo/${_id}`} >
                   
                   <button className="btnEdit"><i class="fas fa-edit"></i></button>
                 </Link>
                   
                 
                  
                  <button className="btnDlt"><i  onClick={e => deleteTodo(_id)} class="fas fa-trash-alt"></i></button>
      
       </div> </div>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    deleteTodo: propTypes.func.isRequired,

}



export default  connect(null, { deleteTodo }) (TodoItem)

import React, {useState} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo  } from '../actions/todoActions';

const TodoForm = ({ addTodo }) => {
    const [formData, setFormData]=useState({
        title: '',
        description:''
          });
 const {title,description}=formData;   
 const onChange= e => setFormData({...formData,[e.target.name]:e.target.value});    

    return (
        <div >
        <div >
          <div ><h2>Publier Quelque Chose...</h2></div>
          <div  >
            <form onSubmit={e => {
            e.preventDefault();
            addTodo ({ title, description });
           
      }}  className="todo-add" >
            

              <span>Title:</span><input   name="title" className="inputAdd"
                  value={title}
                  onChange={e=>onChange(e)} placeholder="Enter a new Task..." />
              <span>Description:</span><textarea className="inputAdd"
                  placeholder="Description..."
                  name="description"
                  value={description}
                  onChange={e=>onChange(e)}
                 
                />
                 <button className="btnAdd"><i class="fas fa-plus"></i></button>
             
             
             
            </form>
          </div>
        </div>
      </div>
    )
}

TodoForm.propTypes = {
    addTodo: propTypes.func.isRequired,
}

export default  connect(null, { addTodo })(TodoForm)

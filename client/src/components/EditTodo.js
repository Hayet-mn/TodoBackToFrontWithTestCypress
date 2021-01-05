
import React, {useState} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTodo  } from '../actions/todoActions';

const EditTodo = ({ updateTodo }) => {
    const [formData, setFormData]=useState({
        
        title: '',
        description:''
          });
 const {title,description}=formData;   
 const onChange= e => setFormData({...formData,[e.target.name]:e.target.value});    

    return (
        <div >
        <div >
          <div ><p>Modifier ...</p></div>
          <div>
            <form onSubmit={e => {
            e.preventDefault();
            updateTodo ({  title, description });
           
      }}  className="todo-add">
              <div className="form-group">

              <input   name="title"
                  value={title}
                  onChange={e=>onChange(e)} placeholder="Enter a new Task..."  className="inputAdd"/>
              <textarea
                  placeholder="publier..."
                  name="description"
                  value={description}
                  onChange={e=>onChange(e)}
                 
                  className="inputAdd"/>
              </div>
              <button type="submit" className="btn">
                Publier
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

EditTodo.propTypes = {
    updateTodo: propTypes.func.isRequired,
}

export default  connect(null, { updateTodo })(EditTodo)

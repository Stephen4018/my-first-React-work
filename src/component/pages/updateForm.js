import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const UpdateForm = (props) => {
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const updatePost = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:3001/Post/${props.id}`,data);
         } catch (err) {
            if (err. response.states === 404) {
                console.log("Resources could not be found");
            } else {
                console.log (err.message);
            }
         }
        
    }

    return (
      <div className='edit_form_container'>
          <h1>Edit Post</h1>
          <form onSubmit={updatePost}>
              <label>Title</label>
              <input type="text" name='Title' required placeholder='blog title' className='form_box'  defaultValue={props.title} onChange={handleChange}/>
  
              <label>Post comment</label>
              <textarea type="text" name='body' required placeholder='blog body' rows={10} className='form_box' defaultValue={props.body}  onChange={handleChange}/>
  
              <label>Time published</label>
              <input type="datetime-local" name='publishedTime' placeholder='Time Published' className='form_box' defaultValue={props.PublishedTime} onChange={handleChange}/>
  
              <label>Author</label>
              <input type="text" name='author' required placeholder='author' className='form_box' defaultValue={props.author} onChange={handleChange}/>
  
              <button>Update Post</button>
          </form>
  
      </div>
    )
  }

  export default UpdateForm
  
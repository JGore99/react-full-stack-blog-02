import { useLocation, Link } from "react-router-dom";
import React, { useState } from 'react';


const  EditBlog = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    title: location.state.title,
    content: location.state.content,
    id: location.state._id
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateBlog(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const { title, content } = formData

  const isFormInvalid = () => {
    return !(title && content)
  }

  return ( 
    <>
      <form
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <p>Title</p>
      <input
        type='text'
        value={title}
        name='title'
        onChange={handleChange}
      />
      <br/>
      <p>Content</p>
      <textarea
        value={content}
        name='content'
        onChange={handleChange}
      />
      <br/>
      <button className='btn btn-success' disabled={isFormInvalid()}>Update Post</button>
        <Link to="/">
          <button className='btn btn-danger'>Cancel</button>
        </Link>
    </form>
    </>
   );
}
 
export default EditBlog;
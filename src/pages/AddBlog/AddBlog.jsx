import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


const  AddBlog = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
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
      // call will go here.
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const { title, content } = formData
  
  const isFormInvalid = () => {
    return !(title && content)
  }

  return ( 
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
      <button disabled={isFormInvalid()}>Sign Up</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
    </form>
  );
}

export default AddBlog;
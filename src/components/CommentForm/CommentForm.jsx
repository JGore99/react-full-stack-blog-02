
import React, { useState } from 'react';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({
    content:'',
    blogId: props.blogId
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
      props.handleAddComment(formData)
      setFormData({content: '', blogId: props.blogId})
    } catch (err) {
      console.log(err)
    }
  }

  const { content } = formData
  
  const isFormInvalid = () => {
    return !(content)
  }

  return ( 
    <>
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <textarea 
          name="content" 
          cols="30" 
          rows="10"
          value={content}
          onChange={handleChange}
        /><br/>
        <button className='btn btn-success' disabled={isFormInvalid()}>Comment</button>
      </form>
    </>
   );
}
 
export default CommentForm;
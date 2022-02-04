import { useLocation } from "react-router-dom";
import React, { useState } from 'react';


const  EditBlog = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    title: location.state.title,
    content: location.state.content
  })
  return ( 
    <>
      <h1>Edit Blog</h1>
    </>
   );
}
 
export default EditBlog;
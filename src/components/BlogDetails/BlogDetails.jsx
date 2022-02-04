import { useLocation } from "react-router-dom";

const  BlogDetails = () => {
  const location = useLocation()
  return ( 
    <>
      <h1>Blog Details</h1>
      <h2>{location.state.title}</h2>
      <h3>Written by: {location.state.author.name}</h3>
      <p>{location.state.content}</p>
    </>
  );
}
 
export default BlogDetails;
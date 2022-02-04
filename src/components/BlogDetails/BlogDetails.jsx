import { useLocation, Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";

const  BlogDetails = (props) => {
  const location = useLocation()
  return ( 
    <>
      <h1>Blog Details</h1>
      <h2>{location.state.title}</h2>
      <h3>Written by: {location.state.author.name}</h3>
      <p>{location.state.content}</p>
      {props.user.profile === location.state.author._id && <><Link className='btn btn-warning' state={location.state} to='/editBlog'>Edit</Link><br/><br/></>}  
      <CommentForm handleAddComment={props.handleAddComment} blogId={location.state._id} />
    </>
  );
}
 
export default BlogDetails;
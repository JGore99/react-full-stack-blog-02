const Blogs = (props) => {
  return ( 

    <>
    <h1>Blogs!</h1>
    <div class="row">
      {props.blogs.map(blog => 
        <div class="col-sm-6">
        <div class="card">
          <div class="card-header">
            - {blog.author.name}
          </div>
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.content.substring(0,30)}...</p>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
      )}
</div>
    </>
   );
}
 
export default Blogs;
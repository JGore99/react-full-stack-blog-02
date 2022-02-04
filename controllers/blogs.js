import { Blog } from '../models/blog.js'

function create(req, res) {
  req.body.author = req.user.profile
  Blog.create(req.body)
  .then(newBlog => {
    newBlog.populate('author')
    .then(blog => {
      res.json(blog)
    })
  })
}

function index(req, res){
  Blog.find({})
  .populate('author')
  .then(blogs => {
    res.json(blogs)
  })
}

function deleteBlog(req, res){
  Blog.findByIdAndDelete(req.params.id)
  .then(blog => {
    res.json(blog)
  })
}

export {
  create,
  index,
  deleteBlog as delete
}
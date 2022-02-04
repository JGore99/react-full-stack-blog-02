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

function update(req, res){
  Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedBlog => {
    updatedBlog.populate('author')
    .then(blog => {
      res.json(blog)
    })
  })
}

function addComment(req, res) {
  req.body.author = req.user.profile
  Blog.findByIdAndUpdate(req.params.id)
  .then(blog => {
    blog.comments.push(req.body)
    blog.save()
    .then(savedBlog => {
      savedBlog.populate('author')
      .then(blogToReturn => {
        res.json(blogToReturn)
      })
    })
  })
}

export {
  create,
  index,
  deleteBlog as delete,
  update,
  addComment
}
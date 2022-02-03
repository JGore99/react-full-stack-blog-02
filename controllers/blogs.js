import { Blog } from '../models/blog.js'

function create(req, res) {
  req.body.author = req.user.profile
  Blog.create(req.body)
  .then(blog => {
    res.json(blog)
  })
}

export {
  create
}
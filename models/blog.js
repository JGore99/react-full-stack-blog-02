import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  content: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
},{
  timestamps: true
})


const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    comments: [commentSchema]
  }, {
    timestamps: true,
  })

const Blog = mongoose.model('Blog', blogSchema)

export {
  Blog
}
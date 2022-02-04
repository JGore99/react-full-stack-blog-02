import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/blogs'

function createBlog(blogData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,'Content-Type': 'application/json'
  },
    body: JSON.stringify(blogData)
  })
  .then(res => res.json())
}

function getBlogs() {
  return fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}


function deleteBlog(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function updateBlog(blogData) {
  return fetch(` ${BASE_URL}/${blogData.id}`, {
    method: 'PATCH',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,'Content-Type': 'application/json'
  },
  body: JSON.stringify(blogData)
  })
  .then(res => res.json())
}

function addComment(commentFormData){
  return fetch(`${BASE_URL}/${commentFormData.blogId}/comments`, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,'Content-Type': 'application/json'
  },
    body: JSON.stringify(commentFormData)
  })
  .then(res => res.json())
}

export {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
  addComment
}
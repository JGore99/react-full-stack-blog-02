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

export {
  createBlog
}
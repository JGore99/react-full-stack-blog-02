import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import AddBlog from '../AddBlog/AddBlog'
import Blogs from '../Blogs/Blogs'
import BlogDetails from '../../components/BlogDetails/BlogDetails'
import * as authService from '../../services/authService'
import { createBlog, getBlogs, deleteBlog } from '../../services/blogService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [blogs, setBlogs] = useState([])
	const navigate = useNavigate()

	useEffect(()=>{
		getBlogs()
		.then(blogs => setBlogs(blogs))
	}, [])

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	const handleCreateBlog = blogData => {
		createBlog(blogData)
		.then(newBlogData => setBlogs([...blogs, newBlogData]))
	}

	const handleDeleteBlog = id => {
		deleteBlog(id)
		.then(deletedBlog => {
			setBlogs(blogs.filter(blog => blog._id !== deletedBlog._id))
		})
		
	}

	return (
		<main>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
				<Route path='/addBlog' element={<AddBlog handleCreateBlog={handleCreateBlog}/>}/>
				<Route path='/blogs' element={user ? <Blogs user={user} blogs={blogs} handleDeleteBlog={handleDeleteBlog} /> : <Navigate to='/login' />} />
				<Route path='/blogDetails' element={<BlogDetails />} />
			</Routes>
		</main>
	);
}
 
export default App;
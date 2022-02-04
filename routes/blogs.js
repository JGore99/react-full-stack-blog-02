import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', blogsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, blogsCtrl.create)
router.delete('/:id', checkAuth, blogsCtrl.delete)
router.patch('/:id', checkAuth, blogsCtrl.update)
router.post('/:id/comments', checkAuth, blogsCtrl.addComment)

export { router }
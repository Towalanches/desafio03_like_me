import express from 'express'
import { getPosts, createPost } from '../controllers/postController.js'

const router = express.Router()

/* Ruta GET para obtener todos los posts */
router.get('/', getPosts)
/* Ruta POST para crear un nuevo post */
router.post('/', createPost)

export default router
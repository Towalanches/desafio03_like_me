import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import postsRoutes from './routes/postRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use('/posts', postsRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

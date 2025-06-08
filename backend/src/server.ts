import express from 'express'
import cors from 'cors'
import  helmet from 'helmet';
import { connectDB } from './infrastructure/database/db'
import authRoutes from './infrastructure/api/routes/authRoutes'
import { config } from './config'

const app = express()

app.use(cors())
app.use(helmet());
app.use(express.json())

app.use('/api/auth', authRoutes)

const startServer = async () => {
  await connectDB()
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
  })
}

startServer()
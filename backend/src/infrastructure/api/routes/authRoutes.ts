import * as express from 'express'
import { authController } from '../controllers/authController'
import { validateRequest } from '../middleware/validateRequest'
import Joi from 'joi'

const router = express.Router()

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('jobSeeker', 'recruiter', 'admin').required(),
  name: Joi.string().optional(),
})

router.post('/register', validateRequest(registerSchema), authController.register)

export default router
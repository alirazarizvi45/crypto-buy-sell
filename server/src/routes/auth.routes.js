import { Router } from 'express';
import { register } from '../controller/auth.controller.js';
export const authRoutes = Router();

// Register
authRoutes.post('/register', register);



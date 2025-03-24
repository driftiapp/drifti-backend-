import express, { Router, RequestHandler } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { authenticate } from '../middleware/auth';

const router: Router = express.Router();

// Public routes
router.post('/register', register as unknown as RequestHandler);
router.post('/login', login as unknown as RequestHandler);

// Protected routes
router.get('/profile', 
  authenticate as unknown as RequestHandler,
  getProfile as unknown as RequestHandler
);

export default router; 
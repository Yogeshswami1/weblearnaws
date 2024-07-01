import express from 'express';
// import { registerEmail, sendUpdates } from '../controllers/emailController.js';
import { registerEmail , sendUpdates } from '../controller/emailController.js';

const router = express.Router();

router.post('/register', registerEmail);
router.post('/updates', sendUpdates);

export default router;

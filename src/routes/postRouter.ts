import { Router } from 'express';
import PostController from '../controllers/postController';

const router = Router();

// Get all users
router.get('/', PostController.listAll);
router.post('/', PostController.addNew);

export default router;

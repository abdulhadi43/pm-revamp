import { Router } from 'express';
import imageController from '../controllers/imageController';

const router = Router();

// Get all users
router.post('/process-image', imageController.processImagesController);

export default router;

import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

// Get all users
router.get('/', UserController.listAll);
router.post('/', UserController.addNew);
router.put('/:id', UserController.updateUser);
// router.delete('/:id', UserController.deleteUser);

export default router;

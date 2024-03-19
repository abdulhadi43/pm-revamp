import { Router } from 'express';
import user from './userRouter';
import post from './postRouter';
import image from './imageRouter';

const routes = Router();

routes.use('/v1/user', user);
routes.use('/v1/image', image);


export { routes };

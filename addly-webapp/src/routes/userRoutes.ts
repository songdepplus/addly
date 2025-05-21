import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export const setUserRoutes = () => {
    router.get('/users', userController.getUserData);
    router.post('/users', userController.postUserData);
    router.delete('/users/:id', userController.deleteUserData);

    return router;
};
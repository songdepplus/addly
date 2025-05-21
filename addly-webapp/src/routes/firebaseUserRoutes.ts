import express from 'express';
import { getUser, createUser } from '../controllers/firebaseUserController';

const router = express.Router();

router.get('/:uid', getUser);
router.post('/', createUser);

export default router;

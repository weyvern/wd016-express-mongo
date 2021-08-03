import { Router } from 'express';
import { getAllUsers, getSingleUser, createNewUser } from '../controllers/users.js';
const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getSingleUser);
userRouter.post('/', createNewUser);

export default userRouter;

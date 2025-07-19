import {registerUser, userCredits} from "../controllers/userControllers.js";
import {loginUser} from "../controllers/userControllers.js";
import express from 'express';
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth, userCredits)
export default userRouter

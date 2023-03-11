import express from  "express";
import { createBlogHandler, getBlogByuserHandler, getBlogsByInterestHandler } from "./controller/blogController.js";
import { createUserHandler, loginUserHandler } from "./controller/userController.js";


const router = express.Router();


router.post('/api/createUser',createUserHandler);
router.post('/api/loginUser', loginUserHandler)


router.post('/api/createBlog', createBlogHandler)
router.post('/api/getBlogsByInterest', getBlogsByInterestHandler)
router.post('/api/getBlogsByUser/:userId',getBlogByuserHandler)
 export {router as routes};
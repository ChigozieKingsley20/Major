import { createBlog, getBlogByUser, getBlogsByInterest } from "../service/blogService.js";
import {  } from "mongoose";

export async function createBlogHandler(req,res){
    try{
    const blog = await createBlog(req.body);
    return res.status(200).send(blog);
    }catch(err) {
        return res.status(500).send("Error whuile creating Blog: ", err)
    }
}


export  async function getBlogsByInterestHandler (re,res) {
    try{
        const  blog = await getBlogsByInterest(req.body.Interest);
        return res.status(200).json(blog);
    }catch(err) {
        return res.status(500).send("Error while fetching blogs");
    }
}




export async function getBlogByuserHandler (req,res) {
    const userId = req.params.id;
    try{
    const blog=await getBlogByUser(userId);
    return res.status(200).json(blog);
}catch(err) {
    return res.status(500).send("Error while fetching blogs: ", err);
}
}




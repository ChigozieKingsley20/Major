import { Blogs } from "../models/blog.js"


export async function createBlog(blogData) {
    let blogs= [];
    blogs.push(blogData);
    return await Blogs.insertMany(blogData);
}


export async function getBlogsByInterest(interest) {
    return await Blogs.find({tag:interest}).toArray(); //toarray means convert anything passed into an array
}

export async function getBlogByUser(userId) {
    return await Blogs.find({createdBy:userId}).toArray();
}
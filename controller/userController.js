import mongoose from "mongoose";
import express from "express";
import { createUser, getUserById, loginUser } from "../service/userService.js";


export async function createUserHandler(req,res){
    try{
        const user = await createUser (req.body);
        return res.status(200).json(user);
    }catch (err){
        return res.status(500).send('error while authenticating user. Error message:',err);
    }
}

//login conyroller
 export async function loginUserHandler(req,res) {
    try{
    const user = await loginUser(req.body);
    if(user.status=='error') {
        return res.status(401).send(user.message);
    }else{
return res.status(200).json(user.message.data);
    }
 }catch (err) {
    return res.status(500).send('error while authenticating user. Error message:',err);
 }
 }



export async function getUserByIdHandler (req,res) {
    const id = req.params.id;
    try{
    const user=await getUserById(id);
    return res.status(200).json(user);
}catch(err) {
    return res.status(500).send("Error while fetching user. Error message: ", err)
}
}
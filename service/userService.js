import mongoose from "mongoose";
import { Users } from "../models/user.js";
import bcrypt  from 'bcrypt';





export async function createUser(userData) {

    const passwordByUser = userData.password;  // hatshing method
    const hashedPassword = await bcrypt.hash(passwordByUser,10);
    userData.password = hashedPassword;
    let users = [];
    users.push(userData);
    return await Users.insertMany(userData);
  }

// login service
export async function loginUser(userData) {
  const emailId = userData.emailId;     //login api
  const passwordByUser = userData.password;


  const userDocument = await Users.findOne({email:emailId}) //compare the two email
  if (!userDocument){
    return{status:'error', message:'user does nt exist'}// if not  match, disply message below
  } 


  const hashedPassword=userDocument.password; //compare the two password
  const match = await bcrypt.compare(passwordByUser,hashedPassword);
  if (!match) {
    return {status:'error', message:'password does not match'}// if not  match, disply message below

}

}

  export async function getUserById(id){
    return await Users.findById(id);
  }

  export async function updateUser(id,data){
    return await Users.updateOne({_id:id},{$set:data});
  }
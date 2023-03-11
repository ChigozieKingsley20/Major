import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { routes } from './routes.js';


const app = express();


app.use(express());
app.use(cors());



const databaseUr2 ='mongodb+srv://MAJOR:Ezeanyagu20@cluster0.uywtufk.mongodb.net/peoples'
mongoose.connect(databaseUr2);
const database = mongoose.connection;


database.on('error',(error)=>{
    console.log("Error while connecting to database");
  })
  
  database.once('connected',()=>{
    console.log("Connected to database successfully");
  })
   
  app.use(routes)

  app.get('/healthcheck',(req, res) =>{
    res.send('servet is up and running');
    res.status(200).send("server is up and running");
  })

  app.listen(6000,()=>{
    console.log("server is running on port 6000");
  })
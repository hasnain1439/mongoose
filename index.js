import express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';
import enQueryModel from './enQuery/enQuery.model.js';
env.config();

const app = express();

app.use(express.json());

app.post('/api/insert-data', (req,res)=>{
    res.send("runing")
})

mongoose.connect(process.env.mongoLink).then(()=>{
    console.log("connected to mongoDB");
    app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
})
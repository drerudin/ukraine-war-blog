import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://admin:andrey1234@cluster0.jczpais.mongodb.net/ukrblog?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to the database and listening to localhost 5000"))
.catch((err)=>console.log(err));

app.listen(5000);
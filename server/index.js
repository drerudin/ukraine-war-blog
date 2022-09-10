import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";
const app = express();


app.use("/api/user", router) 
mongoose.connect('mongodb+srv://admin:andrey1234@cluster0.jczpais.mongodb.net/ukrblog?retryWrites=true&w=majority')
.then(()=>app.listen(4000))
.then(()=>console.log("Connected to the database and listening to localhost 4000"))
.catch((err)=>console.log(err));

app.listen(5000);
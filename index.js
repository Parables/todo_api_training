import express from 'express';
import router from './api/routes/todoRoute.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();




const app = express();      
const db = process.env.DB_URL;


mongoose.connect(db,
{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {console.log('database is connected live')})

const port = process.env.P0RT || 3000;


app.use(cors());
app.use(express.json());
app.use('/todos', router);

app.get('/todos',(req,res) => {
     res.send('Welcome back Express');
 })
    

app.listen(port, () => {
    console.log (`listening at port ${port}`);
}) 
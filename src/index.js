import express from 'express';
import userRouter from '../routes/user.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', userRouter);
app.all('*', (req, res)=>res.send('page not found'));

app.listen(3001, ()=>console.log('listening to port 3001'));
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
await connectDB();


app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);


app.get('/', (req,res)=> res.send("API Working fine"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('server runnung on port :'+ PORT));
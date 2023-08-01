import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'

const app = express();
dotenv.config();


app.use(express.json());

app.use("/api/role", roleRoute);

app.use("/api/auth", authRoute);

// Response Handler Middleware

app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: [200,201,204].some(a=> a === obj.status) ? true : false,
      status: statusCode,
      message: message,
      data: obj.data
    });
});


// Db connection
const uri = process.env.MONGO_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();


app.listen(8800, ()=>{
    connectToDatabase();
    console.log('Connected to backend');
});
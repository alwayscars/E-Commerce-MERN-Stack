const express = require('express');
const app=express();
const dotenv = require('dotenv');
const path=require('path');
const cors=require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')})

const products=require('./routes/product');
const orders=require('./routes/order');


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json())
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})
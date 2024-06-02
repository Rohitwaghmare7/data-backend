require('dotenv').config();

const mongoose = require('mongoose');
const mongoURI = process.env.REACT_APP_MONGO_CONNECT
const Data = require('./models/Data');

const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI,{
        serverSelectionTimeoutMS: 5000, 
        connectTimeoutMS: 10000, 
        socketTimeoutMS: 45000,
    }).then(() => {
        console.log('Connected to MongoDB');
      })
      .catch(error => console.error('Error connecting to MongoDB:', error));
}

module.exports = connectToMongo;


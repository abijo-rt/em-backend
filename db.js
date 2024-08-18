// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/EventM'; // Replace with your MongoDB URI

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
};

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, options);
    console.log('Mongoose successfully connected to the database');
  } catch (err) {
    console.error('Mongoose connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from the database');
});



module.exports = connectDB;
const mongoose = require ('mongoose');
require('dotenv').config();
// define the mongo DB communication URL
// const // mongoURL = process.env.MONGODB_URL_LOCAL; // replace 'hotels' with your database name
const mongoURL = process.env.MONGODB_URL; // replace 'hotels' with your database name
// set up MongoDB communication
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 
//Get the default communication
// mongoose maintains a default communication object representing the MongoDB connection
const db = mongoose.connection;
//Define event listening for database connections.
db.on('connected', ()=>{
    console.log('Connected to Mongo DB Server');
});
db.on('error', ()=>{
    console.log('Mongo DB connection error : ',err);
});
db.on('disconnected', ()=>{
    console.log('MongoDB Server is Disconnected');
});

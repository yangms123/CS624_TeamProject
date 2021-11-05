const mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/Fetch';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
  }

mongoose.connect(dbURI,{useNewUrlParser: true});
mongoose.connection.on('connected',()=>{
    console.log(`Mongoose conneted to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connction error: ', err);
});
mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose disconnected')
});

// require('./locations');
const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', 'useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/payrolldb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});  //connect db
const db = mongoose.connection;  //acquire the connection



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Success db');
});






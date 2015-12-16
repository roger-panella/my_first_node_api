// require mongoose
// make a connection String
// you should connect to your db
// and handle connected, disconnected, and error events

var mongoose = require('mongoose');

var connectionString = "mongodb://localhost/spiritanimals"

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log("We are connected!")
});

mongoose.connection.on('error',function(error){
  console.log("Oh no.  You got error " + error)
});

mongoose.connection.on('disconnected',function(){
  console.log("Database disconnected")
});

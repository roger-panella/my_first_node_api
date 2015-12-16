var http = require('http');  // require http library

require('./db/database');  // require database file

var SpiritAnimal = require('./models/SpiritAnimal'); // require Spirit Animal model


// SpiritAnimal.find(function(error,spiritanimals){
//
// })


// .create looks for ({data object}, function (error model))
SpiritAnimal.create({Name: "Aaron", SpiritAnimal: "Red Panda", "DoTheyLikeIt": true},function(error, animal){
  if (error) console.log(error);
  console.log(animal);
});


http.createServer(function(request,response){
  var data;
  SpiritAnimal.find(function(error, animals){
    if (error) console.log(error);
    response.writeHead(200);
    response.write(JSON.stringify(animals));
    response.end();
  })

}).listen(8080);

console.log('Api server is running!');

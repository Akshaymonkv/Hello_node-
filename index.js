var http = require('http'); //to import the http module into our code

http.createServer(function(request, response) {

  response.writeHead(200); //To display the status code
  response.write('Hello node.js') //to display rhe output
  response.end(); //to close the connection


}


).
  listen(8080);//app listens on the port 8080
console.log('listening on port 8080.')
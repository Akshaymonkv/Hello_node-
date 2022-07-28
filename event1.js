var http = require('http')

http.createServer(function(request, response) {
  response.writeHead(200)
  response.write('running')
  setTimeout(
    function() {
      response.write('Dog')
      response.end()
    },5000)
}
).listen(8080);
console.log('running on 8080')
  //no
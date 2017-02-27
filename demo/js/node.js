var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200,{
		'Content-Type':'text/plain'
	});
	response.end('<h1>皮皮虾，我们走</h1>')
}).listen(8081)
console.log('Server running at http://127.0.0.1:8081/');
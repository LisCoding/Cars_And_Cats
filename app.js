// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('Client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //create new URL request to render a form
    else if (request.url === "/cars/new") {
      fs.readFile('./views/form.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    }

    //car URl
    // else if (request.url === "/cars") {
    //   fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
    //       response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
    //       response.write(contents);  //  send response body
    //       response.end(); // finished!
    //   });
    // }


    //images URL request a cool picture
    else if (request.url === '/images/tesla.jpg') {
      fs.readFile('./images/tesla.jpg',  function (errors, contents){
          response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    }

    //images URL request to display a cat picture
    else if (request.url === '/images/cat3.jpg') {
      fs.readFile('./images/cat3.jpg',  function (errors, contents){
          response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('URL requested is not available');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");

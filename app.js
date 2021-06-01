const http = require('http');
const fs = require('fs');

const server = http.createServer();
const port = 7000;

server.on('request', (request, response) => {
    console.log(request.url);

    if(request.url === "/") {
        // La réponse lorsqu'on est sur http://localhost:port/
        // Type et code status de la réponse
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.readFile('index.html','utf-8',(err, fileContent) => {
            if(err) console.log(err);
            else response.end(fileContent);
        })
    }
    else if(request.url === "/contact") {
        // La réponse lorsqu'on est sur http://localhost:port/contact
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        response.end('<html><body><h1>Ma page de contact</h1></body></html>')
    }
    else if(request.url === "/style.css") {
        response.writeHead(200, {
            'Content-Type': 'text/css'
        });

        fs.readFile('style.css','utf-8',(err, fileContent) => {
            if(err) console.log(err);
            else response.end(fileContent);
        })
    }
    else {
        // La réponse envoyée pour toutes les autres URL
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });

        response.end('<html><body><h1>404 Not found!</h1></body></html>')  
    }

})

server.listen(port, "localhost", (err) => {
    if(err) console.log(err);
    else {
        console.log(`Server is running on http://localhost:${port}`);
    }
})
const http = require('http');

const server = http.createServer();
const port = 4400;

server.on('request', (request, response) => {
    // Type et code status de la réponse
    response.writeHead(200, {
        'Content-Type': 'text-plain'
    });

    // Envoyer ma réponse complète
    response.end('Hello World!');

})

server.listen(port, "localhost", (err) => {
    if(err) console.log(err);
    else {
        console.log(`Server is running on http://localhost:${port}`);
    }
})
const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    // Type et code status de la réponse
    response.setHeader('Content-Type','text-plain');
    response.writeHead(200);

    // Ecrire le contenu de la réponse
    response.write('Hello World!');

    // Envoyer ma réponse complète
    response.end();

})

server.listen(5500, "localhost", (err) => {
    if(err) console.log(err);
    else {
        console.log("Server is running on http://localhost:5500");
    }
})
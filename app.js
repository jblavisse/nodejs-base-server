/* 
Consignes:
Créer les prémices d'un blog en utilisant Bootstrap
Les pages attendues:
Une page d'accueil qui liste les 3 derniers articles (/)
Une page pour tous les articles (/blog)
Une page pour un article (/blog/1)
/style.css qui fonctionne pour mon fichier de style
404 not found pour toutes les autres URL
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer();
const port = 7000;

server.on('request', (request, response) => {
    console.log(request.url);

    if(request.url === "/") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.readFile('index.html','utf-8',(err, fileContent) => {
            if(err) console.log(err);
            else response.end(fileContent);
        })
    }
    else if(request.url === "/blog") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        
        fs.readFile('blog.html','utf-8',(err, fileContent) => {
            if(err) console.log(err);
            else response.end(fileContent);
        })
    }
    else if(request.url === "/blog/1") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        
        fs.readFile('article.html','utf-8',(err, fileContent) => {
            if(err) console.log(err);
            else response.end(fileContent);
        })
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
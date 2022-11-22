// создание своего сервера и прописать в нее html например
const http = require("http");
let server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html ; charset=utf-8" });
  response.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>HELLOO AZAMAT GOOGLE Node JS digital nomad</h1>
      <script src="./index.js"></script>
    </body>
  </html>
  `)
})

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`сервер запущен ${HOST}:${PORT}`);
});
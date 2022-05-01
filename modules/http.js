const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("New Request");
  console.log(req.url);
  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;
    default:
      res.write("Error 404: NO se lo que quieres");
      res.end();
      break;
  }

  // res.writeHead(201, { "Content-Type": "text/plain" });
  // res.write("Hola, ya sé usar HTTP de Node");
  // res.end();
}

console.log("Escuchando HTTP en el puerto 3000");

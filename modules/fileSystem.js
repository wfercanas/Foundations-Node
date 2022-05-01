const fs = require("fs");

function read(path, callback) {
  fs.readFile(path, (err, data) => {
    // Leido
    callback(data.toString());
  });
}
// read(__dirname + '/example.txt', console.log);

function write(path, contenido, callback) {
  fs.writeFile(path, contenido, (err) => {
    if (err) {
      console.error("No he podido escribir el archivo", err);
      return;
    }
    callback("Se ha escrito el archivo correctamente");
  });
}
// write(__dirname + '/writeExample.txt', 'Soy un archivo nuevo', console.log);

function eliminate(path, callback) {
  fs.unlink(path, (err) => {
    if (err) {
      console.error("Error eliminando el archivo", err);
      return;
    }
    callback("Se ha borrado el archivo");
  });
}
// setTimeout(() => eliminate(__dirname + '/writeExample.txt', console.log), 2000)

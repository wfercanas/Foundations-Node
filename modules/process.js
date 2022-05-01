// const process = require("process");

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

// Exit con desconexión del Event Loop
process.on("exit", () => {
  console.log("Vale, proceso acabó");
});

// Capturar una excepción
process.on("uncaughtException", (err, origin) => {
  console.log("Se nos ha olvidado capturar un error");
  console.error(err);
});

unexistentFunction();
console.log("Si el error no se recoge, esto no sale");

function hola(nombre, myCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    myCallback(nombre);
  }, 1000);
}

function adios(nombre, otherCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otherCallback();
  }, 800);
}

console.log("Iniciando...");

// Chained callbacks
hola("Fernando", (nombre) => {
  adios(nombre, () => {
    console.log("Terminando...");
  });
});

// Unchained callbacks
// hola('Fernando', () => {});
// adios('Fernando', () => {});

function hola(nombre, myCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    myCallback(nombre);
  }, 1000);
}

function hablar(speakCallback) {
  setTimeout(() => {
    console.log("Bla bla bla..");
    speakCallback();
  }, 2000);
}

function adios(nombre, byeCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    byeCallback();
  }, 800);
}

console.log("Iniciando...");

// Callback Hell
hola("Fernando", (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          adios(nombre, () => {
            console.log("Terminando...");
          });
        });
      });
    });
  });
});

function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(nombre + ": Bla bla bla..");
      resolve(nombre);
    }, 500);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios " + nombre);
      resolve(nombre);
    }, 800);
  });
}

// Solución
console.log("Iniciando...");
hola("Fernando").then(hablar).then(hablar).then(hablar).then(adios);
console.log("Procesando...");

// Solución con recursión
function hola(nombre, veces, myCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    myCallback(nombre, veces);
  }, 1000);
}

function hablar(nombre, veces) {
  if (veces) {
    setTimeout(() => {
      console.log("Bla bla bla..");
      hablar(nombre, veces - 1);
    }, 2000);
  } else {
    adios(nombre);
  }
}

function adios(nombre) {
  setTimeout(() => {
    console.log("Adios " + nombre);
  }, 800);
}

console.log("Iniciando...");

// Solution with recursion
hola("Fernando", 3, hablar);

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
    }, Math.random() * 2000);
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

async function main() {
  let nombre = await hola("Fernando");
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
}

// Solución
console.log("Iniciando...");
main();
console.log("Procesando...");

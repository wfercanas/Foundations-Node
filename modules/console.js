console.log("Log: Imprimir algo");
console.error("Error: No funcionó");
console.warn("Warn: Warning");

let table = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Y",
  },
];

console.log(table);
console.table(table);

// Agrupar logs
console.group("Conversación");
console.log("Hola");
console.log("Estas");
console.log("Bien?");
console.group("Confirmar");
console.log("Vale");
console.groupEnd();
console.groupEnd();
console.log("Habla");

// Contar las veces que sucede algo
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");

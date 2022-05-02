console.time("Complete");

// Sync
let sum = 0;
console.time("Bucle");
for (let i = 0; i < 1000000; i++) {
  sum += 1;
}
console.timeEnd("Bucle");

let sum2 = 0;
console.time("Bucle2");
for (let j = 0; j < 1000000000; j++) {
  sum2 += 1;
}
console.timeEnd("Bucle2");
console.time("Async");
asynchonous().then(() => {
  console.timeEnd("Async");
});

console.timeEnd("Complete");

function asynchonous() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina el proceso asíncrono");
      resolve();
    }, 1000);
  });
}

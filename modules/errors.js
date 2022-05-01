// Sync
function newFunction() {
  breakCodeAsync();
}

function breakCode() {
  return 3 + z;
}

// breakCode();

// Async
function breakCodeAsync() {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asíncrona:", err.message);
    }
  }, 1000);
}

try {
  newFunction();
} catch (err) {
  console.error("Vaya. Algo se ha roto...:", err);
}
console.log("Intenta esta línea");

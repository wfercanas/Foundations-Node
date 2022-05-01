const os = require("os");

console.log(os.arch()); //x64
console.log(os.platform()); // linux
console.log(os.cpus().length); // 4
// console.log(os.constants);

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
console.log(gb(os.freemem())); // Memoria libre
console.log(gb(os.totalmem())); // Memoria total

console.log(os.homedir()); // Directorio local
console.log(os.tmpdir()); // Directorio temporal
console.log(os.hostname()); // Nombre del servidor
console.log(os.networkInterfaces()); // Interfaces de red activas en la máquina

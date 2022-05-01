const { exec, spawn } = require("child_process");

/*
exec("ls -la", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});
*/

let process = spawn("ls", ["-la"]);
console.log(process.pid);
console.log(process.connected);

// Eventos en Node
process.stdout.on("data", (data) => {
  console.log("Está muerto?");
  console.log(process.killed);
  console.log(data.toString());
});
process.on("exit", () => {
  console.log("El proceso terminó");
});

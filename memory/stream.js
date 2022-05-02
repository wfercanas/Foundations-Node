const fs = require("fs");
const { Transform } = require("stream");
const stream = require("stream");
const util = require("util");

let data = "";

// Read
let readableStream = fs.createReadStream(__dirname + "/input.html");
// readableStream.setEncoding("UTF8");
// readableStream.on("data", (chunk) => {
//   data += chunk;
// });
// readableStream.on("end", () => {
//   console.log(data);
// });

// Write
process.stdout.write("hola");
process.stdout.write("que");
process.stdout.write("tal");
process.stdout.write("estas");

const transform = stream.Transform;
function Mayus() {
  transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayusEx = new Mayus();

readableStream.pipe(mayusEx).pipe(process.stdout);

let buffer = Buffer.alloc(4); // 1 Byte
let bufferDirect = Buffer.from([1, 2, 3, 4]);
let bufferText = Buffer.from("Hola mundo");

console.log(buffer);
console.log(bufferDirect);
console.log(bufferText);

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());

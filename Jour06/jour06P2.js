const fs = require("fs");
const input = fs.readFileSync(`Jour06/jour06_input.txt`, `utf-8`).split("\r\n").toString();


let sum = 0;
for (let index = 0; index <= input.length; index++) {
    let unique = new Set();
    for (let j = 0; j < 14; j++) {
        unique.add(input[index + j]);
    }
    sum++;

    if(unique.size == 14)
    {
        break;
    }
}

console.log(sum + 13)


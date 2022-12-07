const fs = require("fs");
const input = fs.readFileSync(`Jour06/jour06_input.txt`, `utf-8`).split("\r\n").toString();


let sum = 0;
for (let index = 0; index <= input.length; index++) {
    let unique = new Set();
    unique.add(input[index]);
    unique.add(input[index+1]);
    unique.add(input[index+2]);
    unique.add(input[index+3]);
    sum++;

    if(unique.size == 4)
    {
        break;
    }
}

console.log(sum + 3)


const fs = require("fs");
const input = fs.readFileSync(`Jour02/jour02_input.txt`, `utf-8`).split("\r\n");
//X...
//A = Rock
//B = Paper
//C = Scissors

//...X
//? = 1 = Rock
//? = 2 = Paper
//? = 3 = Scissors

//X = L = 0
//Y = D = 3
//Z = W = 6

let sum = 0;

input.forEach(partie => {
    switch (partie[2]) {
        case 'Y':
            sum+=3;
            break;
        case 'Z':
            sum+=6;
            break;
    }
//Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.

if((partie[0] == 'C' && partie[2] == 'Z') ||
    (partie[0] == 'A' && partie[2] == 'Y') ||
    (partie[0] == 'B' && partie[2] == 'X')){
    sum+=1;
}else if((partie[0] == 'A' && partie[2] == 'Z') ||
        (partie[0] == 'B' && partie[2] == 'Y') ||
        (partie[0] == 'C' && partie[2] == 'X')){
    sum+=2;
}else{
    sum+=3;
}
});

console.log(sum)


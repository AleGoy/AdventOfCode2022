const fs = require("fs");
const input = fs.readFileSync(`Jour02/jour02_input.txt`, `utf-8`).split("\r\n");
//X...
//A = Rock
//B = Paper
//C = Scissors

//...X
//X = 1 = Rock
//Y = 2 = Paper
//Z = 3 = Scissors

//L = 0
//D = 3
//W = 6

let sum = 0;

input.forEach(partie => {
    switch (partie[2]) {
        case 'X':
            sum+=1;
            break;
        case 'Y':
            sum+=2;
            break;
    
        default:
            sum+=3;
            break;
    }

    if((partie[0] == 'C' && partie[2] == 'X') || 
        (partie[0] == 'B' && partie[2] == 'Z') ||
        ((partie[0] == 'A' && partie[2] == 'Y') )){
            sum+=6;
    }else if((partie[0] == 'A' && partie[2] == 'X') || 
            (partie[0] == 'B' && partie[2] == 'Y') ||
            ((partie[0] == 'C' && partie[2] == 'Z') )){
        sum+=3;
    }
});

console.log(sum)


const fs = require("fs");
const input = fs.readFileSync(`Jour04/jour04_input.txt`, `utf-8`).split("\r\n");

function getFirst(pair){
    return pair.split(',')[0];
}

function getSecond(pair){
    return pair.split(',')[1];
}

function comparePairs(pair1, pair2){
    const pair11 = Number(pair1.split('-')[0]);
    const pair12 = Number(pair1.split('-')[1]);
    const pair21 = Number(pair2.split('-')[0]);
    const pair22 = Number(pair2.split('-')[1]);
    return (pair11 <= pair21 && pair12 >= pair22) || (pair11 >= pair21 && pair12 <= pair22);
}

let sum= 0;
input.forEach(element => {
    if(comparePairs(getFirst(element), getSecond(element))){
        console.log(element)
        sum++;
    }
});

console.log(sum)
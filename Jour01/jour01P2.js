const fs = require("fs");
const input = fs.readFileSync(`Jour01/jour01_input.txt`, `utf-8`);
const inputSplit = input.split("\r\n");

let sum = 0;
const arrTop = [0,0,0];

function topCal(sum){
    let low = arrTop[0];
    let i = 0;
    for (let index = 1; index < arrTop.length; index++) {
        if(arrTop[index] < low){
            low = arrTop[index]
            i = index;
        }        
    }

    if(arrTop[i] < sum){
        arrTop[i] = sum;
    }
}

inputSplit.forEach(calories => {
    if(calories != ""){
        sum+=Number(calories);
    }else{
        topCal(sum);
        sum=0;
    }     
});

const total = arrTop[0] + arrTop[1] + arrTop[2];

console.log(total)
const fs = require("fs");
const input = fs.readFileSync(`Jour01/jour01_input.txt`, `utf-8`);
const inputSplit = input.split("\r\n");

let sum = 0;
let sumMaxCal = 0;

inputSplit.forEach(calories => {
    if(calories != ""){
        sum+=Number(calories);
    }else{
        if(sum > sumMaxCal){
            sumMaxCal=sum;
        }
        sum=0;
    }     
});
console.log(sumMaxCal)
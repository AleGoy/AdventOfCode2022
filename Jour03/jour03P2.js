const fs = require("fs");
const input = fs.readFileSync(`Jour03/jour03_input.txt`, `utf-8`).split("\r\n");

let stringDouble = "";
let stringTriple = "";
let alreadyExistDouble = false;
let alreadyExistTriple = false;


for (let v = 0; v < input.length -2; v = v + 3) {
    alreadyExistDouble=false;
    alreadyExistTriple=false;

    let input1 = input[v];
    let input2= input[v+1];
    let input3 = input[v+2];
    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input2.length; j++) {
            if(input1[i] == input2[j]){
                stringDouble += input2[j];
            }
        }
    }

    
    for (let index = 0; index < stringDouble.length; index++) {
        for(let j = 0; j < input3.length && !alreadyExistTriple; j++){
            if(stringDouble[index] == input3[j]){
                stringTriple +=  input3[j];
                alreadyExistTriple = true;
                
                
            }
        }
    }

    stringDouble="";
}

let sum = 0;
for(let char of stringTriple){
    if(char.charCodeAt() < 96){
        sum += char.charCodeAt() - 38;
    }else{
        sum += char.charCodeAt() - 96;
    }
}
console.log(stringTriple.length)
console.log(stringTriple,'\n', sum)
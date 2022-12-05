const fs = require("fs");
const input = fs.readFileSync(`Jour03/jour03_input.txt`, `utf-8`).split("\r\n");

let stringDouble = "";
let alreadyExist = false;

input.forEach(element => {
    //https://stackoverflow.com/questions/31744626/how-to-split-a-string-in-two-strings-in-javascript#:~:text=You%20can%20use%20substring(),the%20end%20of%20the%20string.

    const input1half = element.substring(0, element.length / 2)    
    const input2half = element.substring(element.length /2)

    alreadyExist=false;

    for (let i = 0; i < input1half.length; i++) {
        for (let j = 0; j < input2half.length && !alreadyExist; j++) {
            if(input1half[i] == input2half[j]){
                stringDouble += input1half[i];
                alreadyExist = true;
            }
        }
        
    }
 
});

let sum = 0;
for(let char of stringDouble){
    if(char.charCodeAt() < 96){
        sum += char.charCodeAt() - 38;
    }else{
        sum += char.charCodeAt() - 96;
    }
}

console.log(stringDouble,'\n',sum)
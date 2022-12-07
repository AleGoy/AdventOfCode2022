const fs = require("fs");
const input = fs.readFileSync(`Jour05/jour05_input.txt`, `utf-8`).split("\r\n");

/*
                [V]     [C]     [M]
[V]     [J]     [N]     [H]     [V]
[R] [F] [N]     [W]     [Z]     [N]
[H] [R] [D]     [Q] [M] [L]     [B]
[B] [C] [H] [V] [R] [C] [G]     [R]
[G] [G] [F] [S] [D] [H] [B] [R] [S]
[D] [N] [S] [D] [H] [G] [J] [J] [G]
[W] [J] [L] [J] [S] [P] [F] [S] [L]
 1   2   3   4   5   6   7   8   9 
*/ 

 const empty = [];
 const arr1 = ['W', 'D', 'G', 'B', 'H', 'R', 'V'];
 const arr2 = ['J', 'N', 'G', 'C', 'R', 'F'];
 const arr3 = ['L', 'S', 'F', 'H', 'D', 'N', 'J'];
 const arr4 = ['J', 'D', 'S', 'V'];
 const arr5 = ['S', 'H', 'D', 'R', 'Q', 'W', 'N', 'V'];
 const arr6 = ['P', 'G', 'H', 'C', 'M'];
 const arr7 = ['F', 'J', 'B', 'G', 'L', 'Z', 'H', 'C'];
 const arr8 = ['S', 'J', 'R'];
 const arr9 = ['L', 'G', 'S', 'R', 'B', 'N', 'V', 'M'];

 const arrArrays = [empty, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

 function getNumbers(element){
    return element.replace('move ', '').replace(' from ', '-').replace(' to ', '-')
 }

 input.forEach(element => {
    const newElement = getNumbers(element);

    const first = Number(newElement.split('-')[0]);
    const second = Number(newElement.split('-')[1]);
    const third = Number(newElement.split('-')[2]);

    for (let index = first; index > 0; index--) {
        //https://stackoverflow.com/questions/9050345/selecting-last-element-in-javascript-array
        arrArrays[third].push(arrArrays[second].slice(-1)[0]);
        arrArrays[second].pop();
    }

 });

 let lastLetters = "";
 arrArrays.forEach(e => {
    if (e < 1) return; //https://stackoverflow.com/questions/41283191/start-from-second-item-in-foreach-loop

    lastLetters += e.slice(-1)[0];
 })

 console.log(lastLetters)


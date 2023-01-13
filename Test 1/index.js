const prompt = require('prompt-sync')();
const input = prompt('Enter a number: ');

var num = 0
var str = ''
for(let i=0;i<input;i++){
    str = str.concat(`${i*(i+1)/2+1}-`)
}
str = str.slice(0, -1);
console.log(str)

let str="Hello";
const vowles=['a','e','i','o','u'];
let count=0
for(let char of str){
    if(vowles.includes(char)){
        count++;
    }
}
console.log(count)
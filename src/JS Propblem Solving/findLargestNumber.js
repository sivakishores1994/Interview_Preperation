
let numbers=[11,4,5,2,1,8,3];
let largest=numbers[0];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest = numbers[i]
    }
}
console.log(largest)
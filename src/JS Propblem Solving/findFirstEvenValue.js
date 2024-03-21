const numbers=[1,3,4,5,2,7,6];

const firstEven=numbers.find(num=> num%2===0);

console.log(numbers)

//using loop

const arr=[22,10,77,77];
let temp=0;
for(let i=0;i<arr.length;i++) {
    if(arr[i]%2===0){
        temp=arr[i];
        break;
    }
}
console.log(temp)

//find dupicates from array and display the duplicates with duplicate count

let arr=['hi','hello','hi','siva','siva'];
let unique=[];
let duplicates=[];
let count=0;
arr.forEach(num =>{
    if(unique.indexOf(num)==-1){
        unique.push(num);
    }
    else{
             duplicates.push(num)
    }
});

const newObj=duplicates.map(num => [num, arr.filter(validation => num===validation).length])
console.log(newObj.filter(num=> num !==1)

//op: 
// [ [ 'hi', 2 ], [ 'siva', 2 ] ]

//using map and filter

const arr1=[1,2,3,2,4,3,1,1,2];
const duplicates=[];
let count=0
const filteredVas=arr1.filter((val,index,arrs)=>{
    return arrs.indexOf(val)===index;
})
const duplWithCounts=filteredVas.map((num)=> [num, arr1.filter((val)=> val===num).length])
console.log(duplWithCounts.filter((num)=>num[1]!==1))

//op: [ [ 1, 3 ], [ 2, 3 ], [ 3, 2 ] ]

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
console.log(newObj)

//op: 
// [ [ 'hi', 2 ], [ 'siva', 2 ] ]

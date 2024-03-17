const arr=[1,2,[3,4],5,6,[7,8,[9,10]]];

function flattenArr(arr){
    newArray= arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            acc=acc.concat(flattenArr(curr));
        }
        else{
            acc.push(curr);
        }
        return acc
    },[]);
    return newArray
}
console.log(flattenArr(arr))
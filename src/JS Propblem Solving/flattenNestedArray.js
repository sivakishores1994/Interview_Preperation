const arr=[1,2,[3,4],5,6,[7,8,[9,10]]];

function flattenArrUsingReduce(arr){
    newArray= arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            acc=acc.concat(flattenArrUsingReduce(curr));
        }
        else{
            acc.push(curr);
        }
        return acc
    },[]);
    return newArray
}
console.log(flattenArrUsingReduce(arr))

///without using reduce

function flattenArrUsingLoop(arr){
    let newArray=[];
    for(let data of arr){
        if(Array.isArray(data)){
           newArray = newArray.concat(flattenArrUsingLoop(data));
        }
        else{
            newArray.push(data);
        }
    }
    return newArray;
}
console.log(flattenArrUsingLoop(arr));


//using flat() inbuit func

function flattenArrUsingflat(arr){
    return arr.flat(Infinity);
}
console.log(flattenArrUsingflat(arr))
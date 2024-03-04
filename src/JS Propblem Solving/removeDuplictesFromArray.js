function removeDuplictesFromArray(input){
    let newArr=[];
    for(let i=0;i<input.length;i++){
        if(newArr.indexOf(input[i])===-1){
            newArr += input[i];
        }
    }
    return newArr;
}

console.log(removeDuplictesFromArray([1,2,2,3,3,4,6]));


function removeDuplictesFromArrayUsingBulitInJS(input){
    //convert the input array to Set , it will allow only unique values
    let removeDuplicates=new Set(input);
    return [...removeDuplicates];
}

console.log(removeDuplictesFromArrayUsingBulitInJS([1,2,2,3,3,4,6]));



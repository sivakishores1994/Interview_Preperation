//write a function that returns the revrese of string
function reverseString(input){
    let str= ''
    for(i=input.length-1;i>=0;i--){
        str += input[i];
    }
    return str
}

console.log(reverseString("Siva")) //op: aviS

//we can use in-built JS Functions

function reverseStringUsingInBuiltJS(input){
    let str= input.split('').reverse().join('');
    return str
}

console.log(reverseStringUsingInBuiltJS("kishore")) //op: erohsik

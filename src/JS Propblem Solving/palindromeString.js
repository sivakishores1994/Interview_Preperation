function palindromeString(input){
    let str='';
        for(let j=input.length-1;j>=0;j--){
            str+=input[j];
        }
        if(str===input){
            console.log("is paliondrome")
        }
        else{
            console.log("is not palindrome");
        }
}

palindromeString("madam");


function palindromeStringWithBuiltinJS(input){
    let str= input.split('').reverse().join('');
    if(str===input){
        console.log("is paliondrome")
    }
    else{
        console.log("is not palindrome");
    }
}

palindromeStringWithBuiltinJS("madam");


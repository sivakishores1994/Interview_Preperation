
    let str1="silent";
    let str2="listen";
    let temp='';

    for(i=0;i<str1.length;i++){
        for(j=0;j<str2.length;j++){
            if(str1.length===str2.length){
            if(str1[i]===str2[j]){
                temp +=str2[j];
            }
        }
        }
       
    }
    if(str1===temp){
        console.log("anagram");
    }
    else{
        console.log("no anagram")
    }


    //using sort

    const sortStr1=str1.split('').sort().join('');
    const sortStr2=str2.split('').sort().join('');
    if(sortStr1===sortStr2){
        console.log("anagram")
    }
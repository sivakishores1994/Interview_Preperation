let str=" hi,  Hello ";

//using replace
console.log(str.replace(/\s/g,""));

//using loop
let str2=''
for(i=0;i<str.length;i++){
    if(str[i]!=' '){
        str2+=str[i];
    }
}
console.log(str2)

function findLongestWord(input){
    let longestWord='';
    let words=input.split(" ");
    console.log(words)
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord=word;
        }
    }
    return longestWord
}

console.log(findLongestWord("Hi this is Siva kishore")) //op: kishore
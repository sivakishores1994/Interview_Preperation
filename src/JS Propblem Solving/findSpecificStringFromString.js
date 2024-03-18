//find count for specific string and remove it

//using split
let str='ckdfhkjffffIIshfkjfhvjkvFFFFffffIIjkdjkdfhkshfkrffffIIsdhkjrhfrehfrefhffffIIkjdhkjhferhfkhreesffffIIdhfs';
let removeffffII=str.split('ffffII');
let updatedStr=removeffffII.join('');
let removedffffIICount=removeffffII.length-1;
console.log(removeffffII); //logs 5
console.log(updatedStr); //logs: ckdfhkjshfkjfhvjkvFFFFjkdjkdfhkshfkrsdhkjrhfrehfrefhkjdhkjhferhfkhreesdhfs

//using regex
console.log((str.replace(/ffffII/g,'')||[])); //logs ckdfhkjshfkjfhvjkvFFFFjkdjkdfhkshfkrsdhkjrhfrehfrefhkjdhkjhferhfkhreesdhf
console.log((str.match(/ffffII/g)||[]).length); //logs 5

//using newRegExp
console.log(str.replace(new RegExp('ffffII','g'),''));
console.log((str.match(new RegExp("ffffII",'g'))||[]).length)
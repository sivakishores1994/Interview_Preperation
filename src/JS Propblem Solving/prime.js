function isPrime(num){
	
  if(num<2){
  	return false
  }
  
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
    	return false
    }
    	
  }
  
  return true

}


if(isPrime(10)){
	console.log("Its Prime")
}
else{
	console.log("its not Prime")
}




function prime(num){

if(num<1) return false;
if(num%2===0) || (num%3===0) return false

for(let i=5;i*i<=num;i++){
	if(num%i===0)|| (num%i+2===0) return false
}
	return true;
}

console.log(prime(37)); //returns true
console.log(prime(49)); // retuns false

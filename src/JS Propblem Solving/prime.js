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

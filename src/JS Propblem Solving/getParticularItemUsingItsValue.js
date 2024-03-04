const obj={name:{age:{people:[{val1:45},{val2:47},{val3:48}]}}};

obj.name.age.people.forEach(item=>{
	if(Object.values(item)==48){
  		console.log(item)
  }
})



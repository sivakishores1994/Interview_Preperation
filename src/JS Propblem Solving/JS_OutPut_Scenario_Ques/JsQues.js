//1

function fruit(){
    console.log(name);
    console.log(price);
    var name='apple';
    let price=10;
}
fruit(); 

//op: first console.log is undefined. Reason=> JS Hoisting allows to console the name before declaring it.
//2nd console.log will throw Uncaught ReferenceError: Cannot access 'price' before initialization" 

function fruit(){
    name='banana'
    console.log(name);
    var name='apple';
}
fruit();                                 //op: 'banana'

function fruit(){
    name=5;
    console.log(name);
    var name='apple';
}
fruit();                                        //op: '5' 

function fruit(){
    name=5;
    console.log(name);
}
fruit(); 

//op: "5" always returns as string if we declare any scope
////////////////////////////////////////////////////////////

//2
for(var i=0;i<3;i++){
	setTimeout(()=>{
  console.log(i)
  },1000)	
}

//op:
    // 3
    // 3
    // 3 // reason ==> 3 will print 3 times because var has global scope so it will print the last value
                    // if we use let it will return 0 1 2 because its a local scope
////////////////////////////////////////////////////////////

//3 //if we add + or - operator before string it will convert that string to number
console.log(+true);                                             //op 1 because true value is 1
console.log(-true);                                                 //op -1 will concatitate with true value 1
console.log(+false);                                            //op 0
console.log(-false);                                        //op 0 
console.log(typeof +true)                                           //op number
console.log(typeof true)                                                //op boolean
console.log(+"true")                                    //op NaN because we cant convert word to number
console.log(+"10")                              //op 10 beacuse string "10" is converted to number 10
////////////////////////////////////////////////////////////////////////////////////

//4
let a=10;
let b=+a;
console.log(b);                                     //op 10

let a="siva";
let b=+a;
console.log(b);                                     //NaN

// let x=10;
// let y+=x;
// console.log(y);                                      //op Uncaught SyntaxError: Unexpected token '+='"

let x=10;
let y=++x;
console.log(x,y);                           //op 11 11 the increment operator(++x) increments and returns the value after incrementing.

let c=10;
let d=c++;
console.log(c,d);                               //op 11 10 the increment operator(++x) returns the value then increment.
////////////////////////////////////////////////////////////////////////////////////

//5 The logical NOT (!) operator takes truth to falsity and vice versa

console.log(!"siva");                       //op: false When used with non-Boolean values, it returns false 
console.log(!!"siva");                                      //op: true , one ! returns false then another !false returns true
////////////////////////////////////////////////////////////////////////////////////

//6
let data="size";
let bird={
	size: "small"
}

console.log(bird[data])                     //op: small
console.log(bird.data)                          //op: undefined
console.log(bird['size'])                       //op: small
console.log(bird.size)                      //op: small
////////////////////////////////////////////////////////////////////////////////////

//7

let obj1={name:'Siva'};
let obj2;
obj2=obj1;
obj1.name="Kishore";

console.log(obj2);                              //op: {name: "kishore"} beacuse same memory has been used here
////////////////////////////////////////////////////////////////////////////////////

//8

var xy;
var xy=10;
console.log(xy);                        //op: 10 , we can create multiple variables using var beacuse its global scope

var xy;
let xy=10;
console.log(xy);                    //Op: Uncaught SyntaxError: Identifier 'xy' has already been declared"
////////////////////////////////////////////////////////////////////////////////////

//9

let a1=3;
let b1= new Number('3');
console.log(a1==b1);                        //op: true
console.log(a1===b1);                               //op: false because new will return Object.
////////////////////////////////////////////////////////////////////////////////////

//10

let name;
console.log(name);                                 //op: undefined, because name is declared but not defined any value
////////////////////////////////////////////////////////////////////////////////////

//11

function fruit(){
    console.log("wooof!");
}
fruit.name="banana";    
fruit();                                        //op: wooof!,  fruit.name line wont affect function
////////////////////////////////////////////////////////////////////////////////////

//12

let a2=1;
let b2='2';

console.log(a2+b2);                                 //op 12

let a3=1;
let b3=+'2';

console.log(a3+b3);                               //op 3 because + operator converts string to number
////////////////////////////////////////////////////////////////////////////////////

//13

let a4=0;
console.log(a4++);                             //op: 0 ,a4++ prints 0 and increase value 1;
console.log(++a4);                              //op: 2 now a4 is 1 so ++a4 increase value 1+1=2 and prints 2
console.log(a4);                              //op: 2  now a4 is 2
////////////////////////////////////////////////////////////////////////////////////

//14

function getAge(...age){
    console.log(typeof(age));                       //op object , because ...rest operator returns [21]. typeof array is object 
    } 
getAge(21)
////////////////////////////////////////////////////////////////////////////////////

//15
//Executing JavaScript from a string is an BIG security risk.
//With eval(), malicious code can run inside your application without permission.
console.log(eval('10*10+5'))                                //op: 105, eval converts the string to num and excute the arguments
////////////////////////////////////////////////////////////////////////////////////

//16
const obj={1:'1',hello:'2',3:'3'};

console.log(obj.hasOwnProperty(1))                                      //op true
console.log(obj.hasOwnProperty('1'))                                //op true
console.log(obj.hasOwnProperty('hello'))                                         //op true
console.log(obj.hasOwnProperty(hello))                              //Uncaught ReferenceError: hello is not defined"
////////////////////////////////////////////////////////////////////////////////////

//17
const obj1={a:'hi',b:'hello',a:'welcome'};
console.log(obj1)                                               //op {a: "welcome",b: "hello"} 'welcome' will replace the 'hi' and takes 'hi' space
////////////////////////////////////////////////////////////////////////////////////

//18
for(let i=0;i<6;i++){
	if(i===3){
  	continue;
  }
  console.log(i)                                            //op: 0,1,2,4,5
}
////////////////////////////////////////////////////////////////////////////////////

//19
const foo = () => console.log("first")
const boo = () => setTimeout(()=>{
		console.log("Second")
});
const koo= () => console.log("Third");

boo();  
foo();
koo();

//op: 
//"first"
//"Third"
//"Second"
////////////////////////////////////////////////////////////////////////////////////

//20

const person={name:'siva'};
function sayHi(age){
	return `${this.name} is ${age}`
}
console.log(sayHi.call(person,21));             //op: "siva is 21", call() method can accept arguments as value 
console.log(sayHi.apply(person,[21]))               //op: "siva is 21", apply() method can accept arguments as array
console.log(sayHi.bind(person, 21))                 //op: returns function we need to call that 
console.log(sayHi.bind(person, 21)())               //op: "siva is 21" , bind() can accepts arguments as values or array
////////////////////////////////////////////////////////////////////////////////////

//21
function sayHi(){
    return (()=> 0)()
}
console.log(typeof sayHi())                             //op: "number"

function sayHi(){
    return ()=> 0
}
console.log(typeof sayHi())                         //op: "function",  because returning "()=>0" this arrow function

function sayHi(){
    return ()=> 0
}
console.log(typeof sayHi()())                           //op: "number", because "()=>0" function has been called and returns 0

////////////////////////////////////////////////////////////////////////////////////

//22
console.log(typeof typeof 1);                           //op: string
////////////////////////////////////////////////////////////////////////////////////

//23
const arr=[1,2,3];
arr[9]=7;
console.log(arr);                   //op: [1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, 7]
////////////////////////////////////////////////////////////////////////////////////

//24
const arr1=[1,2,3];
arr1[3]=arr1;
console.log(arr1);                   //op: [1, 2, 3, [it will create infinate array here]]
////////////////////////////////////////////////////////////////////////////////////

//25
console.log(!!null);                   //op: false, null is negative value so !null return true then !true become false
console.log(!!"");                          //op: false, "" string is negative value so !"" return true then !true become false
console.log(!!1);                           //op: true, 1 is positive value so !1 return false then !flase become true
////////////////////////////////////////////////////////////////////////////////////

//26
console.log([..."siva"]);               //op: ['s','i','v','a'];
////////////////////////////////////////////////////////////////////////////////////

//27

let data1= 3+4+'5';
console.log(data1);                     //Op: 75
console.log(typeof data1);              //Op: string
console.log(typeof 3+4+'5');            //op: number45, because typeof 3 is number
console.log(typeof (3+4+'5'));          //op: string
console.log(3 + 4 + +'5');                  //op: 12
console.log(typeof (3+4+ +'5'));                //op: number because +'5' converts string to number
console.log(typeof []);                 //op: object
console.log([]==[]);                    //op: false because both arrays are using different memory space
console.log([]===[]);               //op: false because both arrays are using different memory space
////////////////////////////////////////////////////////////////////////////////////

//28
let data2=[1,2,3];

let newData=data2.map(num=>{
if(typeof num==='number') return    //here we are not returning anything here so it will be undefined
		return num*2
})
console.log(newData)                                    //op: [undefined, undefined, undefined]

//29

function getName(member){
	member.name='kishore';
}
const person1={name:'siva'};
console.log(person1)                                    //op: {name:'siva'}
getName(person1)
console.log(person1)                                    //op: {name:'kishore'}

//30

function Car(){
    this.make='tata';
return {make}
}
const newcar= Car();
console.log(newcar.make)                                //:op"tata"

function Car(){
    this.make='tata';
return {make:'kia'}
}
const newcar1= Car();
console.log(newcar1.make)                                   //Op: "kia"

//31
(()=>{
	let x=y=10;
})();
console.log(x);                     //op: Uncaught ReferenceError: x is not defined"
console.log(y);                     //op: 10, because we didnt declare any type for y so by default it takes var y. var is global scope so y is 10;

//32

(()=>{
	let x=y=10;
})();

(()=>{
	let x=y=20;
})();
console.log(y);                      //op: 20, y is global scope so overwritten the 10 

//33

let x1=100;

(()=>{
	var x1=20;
})();
console.log(x1);                        //op: 100 because let x1 is global scope here

//34
console.log(!true - true);                           //OP: -1

//35
console.log(true + +'10');                      //op: 11, because + will convert "10" to 10 . true is 1 so 1+10=11

//36

var x=10;
function call(){
delete x;
  return x;
};
console.log(call())   								//op: 10

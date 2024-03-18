//sorting Objects ascending order
let data1=[
    {'firstname':'sam','lastname':'larry','date':'10-1-2022','age':30},
    {'firstname':'sam','lastname':'arry','date':'10-1-2022','age':20},
    {'firstname':'sam','lastname':'carry','date':'10-1-2022','age':50},
    ]
function sortObj(data){
   const newData=data.sort((a,b)=> a.lastname.localeCompare(b.lastname));
   return newData
}
console.log(sortObj(data1));                           
//  //op: [{
//     age: 20,
//     date: "10-1-2022",
//     firstname: "sam",
//     lastname: "arry"
//   }, {
//     age: 50,
//     date: "10-1-2022",
//     firstname: "sam",
//     lastname: "carry"
//   }, {
//     age: 30,
//     date: "10-1-2022",
//     firstname: "sam",
//     lastname: "larry"
//   }]

//sorting decending order

data1.sort((a,b)=> b.lastname.localeCompare(a.lastname));

//sorting ascending order using age

data1.sort((a,b)=> a.age-b.age);

//sorting decending order using age

data1.sort((a,b)=> b.age-a.age);
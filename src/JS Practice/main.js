// let confirmGame= confirm("shall we play rock paper scissors game")
// if(confirmGame){
// let player=prompt("please enter rock or paper or scissors");
// if(player){
//     player?? "please enter your value"
// }
// else{
//     player="please enter your value"
// }
// console.log(player)
// let computerValue= Math.floor((Math.random()*3)+1)


// let computer = computerValue===1? "rock":
//                     computerValue===2?"paper":"scissors";

//                     console.log("computer", computer)
// if(player!="please enter your value"){
// const response = player==computer? "Tie"
//                 :player=="rock"&&computer=="paper"?"Computer Wins"
//                 :player=="paper"&&computer=="rock"?"Player Wins"
//                 :player=="rock"&&computer=="scissors"?"Player Wins"
//                 :player=="scissors"&&computer=="rock"?"Computer Wins"
//                 :player=="paper"&&computer=="scissors"?"Computer Wins"
//                 :"Player Wins"

//             alert(response);
// }
// else{
//     alert(player)
// }
//          }
//          else{
//                  alert("Thanks , come again");   
//          } 


function sliceEmail(emailID){
    let index=emailID.indexOf('@');
    let slicedMail=emailID.slice(0,index);
    return slicedMail
}

console.log(sliceEmail("kishoresiva1994@gmail.com"));
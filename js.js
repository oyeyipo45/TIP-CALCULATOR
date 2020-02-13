

//  let billPaid = 400;
//      let percentage = 20;
//     let noPeople = 2;

function miniCal() {

     let billPaid = parseInt(document.getElementById("billPrice").value);
     let percentage = parseInt(document.getElementById("tip").value);
     let noPeople = parseInt(document.getElementById("noPeople").value);
    

    let individualPayment = 0;
    let withTip = (billPaid * percentage/100);
    let noTip = (billPaid / noPeople);
    individualPayment = (withTip + billPaid ) / noPeople;
    
    if (billPaid >= 1 && percentage === 0 ){
        return (console.log(noTip));
        
    } else if (billPaid > 1 && percentage > 0 ){
        return (console.log(individualPayment));
    } 
    

    // document.getElementById("billResult").innerHTML = individualPayment;

}

// let button = document.getElementById("calculate");
// button.addEventListener("click", miniCal());




miniCal();





// function show() {
//     if (billPaid > 0 ) {
//         miniCal();
//     } 
// }

// let button = document.getElementsByTagName("button")[0]; 

// let button = document.getElementById("calculate");
// button.addEventListener("click", function show () {

//    return console.log("a goot time" + show );

// })

// button.addEventListener("click", show);
// function() {
//     console.log("clicked");
// })


// let button = document.getElementById("calculate");

// button.addEventListener("click", show); 
















 
// let da = function checkDriverAge(age){
//     if ( age < 18 ){
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (age > 18 ) {
//         alert("Powering On. Enjoy the ride!"); 
//     }  else if (  age === 18){ 
//         alert("  Congratulations on your first year of driving. Enjoy the ride!");
//     } 

// }


// console.log(da(18));


// let fam = ["dami" , "funmi","whoo", "gbemi", "kola"];

// let maa = fam.indexOf("gbemi");
// let yoo = [ "aewe"];

// let gaa = fam.reverse();


// let eho = fam.indexOf("funmi");
// let qqq = gaa.sort();


// let user = {};


// user.name = "oye";



// let fami = {
//     first: "emma",
//     firs: "emma",
//     fir: "emma"
// };

// fami.fi="emma";
// fami.fir="ooooo";
// console.log(user);



// let dataBase = [
//     {
//         userName: "oyeyipo45",
//         passWord: "Kolade11"
//     }
// ];

// let newsFeed =[
//     {
//        userName: "Bobby",
//        timeLine: "so tired from learning"
//     },
//     {
//         userName: "sally",
//         timeLine: "javascript is so cool"
//     }
// ];


// let UserNamePrompt = prompt("what's your username");
// let passwordPrompt = prompt("what's your password");


// function login(User, pass) {
//     if (User === dataBase[0].userName && 
//         pass === dataBase[0].passWord) {

//         return console.log(newsFeed);

//     } else {console.log("who get account ??");

//     }
    
// }

// login(UserNamePrompt, passwordPrompt);
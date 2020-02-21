function miniCal() {
  //GETTING ALL THE VALUES FROM THE DOM
  let billPaid = parseInt(document.getElementById("billPrice").value);
  let percentage = parseInt(document.getElementById("tip").value);
  let noPeople = parseInt(document.getElementById("noPeople").value);
  
    
  //CALCULATING THE TIP
    let individualPayment = 0;
    let withTip = (billPaid * percentage/100);
    individualPayment = (withTip + billPaid) / noPeople;
    totalBill = withTip + billPaid;
    
    document.getElementById("billResult").innerHTML = "$" + individualPayment.toFixed(2) + " " + "Per Person";
    document.getElementById("totalBillResult").innerHTML = "$" +  totalBill.toFixed(2);
    
}

//FUNCTION TO CLEAR THE CALCULATOR
function resetMove() {
  document.getElementById("billPrice").value= "";
  document.getElementById("tip").value= "";
  document.getElementById("noPeople").value= "";
  document.getElementById("billResult").innerHTML = "";
  document.getElementById("totalBillResult").innerHTML = "";
}


//DECLEARING THE BUTTONS
let buttonCalculate = document.getElementById("calculate");
let buttonReset = document.getElementById("reset");


//EVENT LISTENERS
buttonCalculate.addEventListener("click", miniCal);
buttonReset.addEventListener("click", resetMove);

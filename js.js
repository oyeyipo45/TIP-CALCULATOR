function miniCal() {

  let billPaid = parseInt(document.getElementById("billPrice").value);
  let percentage = parseInt(document.getElementById("tip").value);
  let noPeople = parseInt(document.getElementById("noPeople").value);
  //GETTING ALL THE VALUES FROM THE DOM
    

    let individualPayment = 0;
    let withTip = (billPaid * percentage/100);
    individualPayment = (withTip + billPaid) / noPeople;
    
    
    console.log(billPaid);
    document.getElementById("billResult").innerHTML = individualPayment;
    
}

let button = document.getElementById("calculate");

button.addEventListener("click", miniCal);
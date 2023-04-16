
function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "US" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " VNĐ";
    }
    else if (FromC == "VND"&& To =="US"){
        Result = "Result: "+ (Amount / 23000) + " USD";
    }
    //     else if (FromC == "VND") {
    //     Result = "Result: " + Amount + " VNĐ"
    // } else {
    //     Result = "Result: " + Amount + " USD"
    // }
        
    document.getElementById("Result").innerHTML = Result;
}

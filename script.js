
function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value;
    inteRate = document.getElementById("interest-rate").value;
    numOfMonths = document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (inteRate * 0.01)) / numOfMonths;

    monthlyPayment = (loanAmountValue / numOfMonths + interest).toFixed(2);

    document.getElementById("payment").innerHTML=`Monthly payment: ${monthlyPayment}`;

}
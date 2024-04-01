// is-active is the class name for active

let billAmount = 0;
let numOfPeople = 0;
let tipPercentage = 0;

// change tipPercentage value
document.getElementsByClassName("tip-percentages").forEach(t => {
    t.addEventListener("click", function() {
        let value = t.innerHTML || t.value;
        tipPercentage = (value + "%");
    });
})

// change bill price/amount value
document.getElementById("bill-input").addEventListener("change", function(e) {
    if(numValidation(e)) {
        billAmount = e.value;
    } else {
        // add an invalid tooltip here
    }

});

document.getElementById("reset-btn").addEventListener("click", function(){
    let objects = {
        bill: document.getElementById(""),
        tipPercent: document.getElementByClassName(""),
        people: document.getElementById(""),
        tipamount: document.getElementById(""),
        total: document.getElementById("")
    }

    reset(billAmount, numOfPeople, tipPercentage);

    objects.bill.value = 0;
    objects.tipPercent.classList.remove("is-active");


})

let numValidation = (number) => {
    let regex = /^\d{1,5}$/;

    if(regex.test(number)){
       return true; 
    } else {
        return false;
    }
}
// is-active is the class name for active

let billAmount = 0;
let numOfPeople = 0;
let tipPercentage = 0;

// change tipPercentage value
Array.from(document.getElementsByClassName("tip-percentages")).forEach(t => {
    t.addEventListener("click", function() {
        let value = t.innerHTML || t.value;
        tipPercentage = value.replace("%", "");
        Array.from(document.getElementsByClassName("tip-percentages")).forEach(el => el.classList.remove("is-active"));
        // Add "is-active" class to clicked element
        t.classList.add("is-active");
        console.log(tipPercentage);
    });
});

// change bill price/amount value
document.getElementById("bill-input").addEventListener("change", function() {
    if(numValidation(document.getElementById("bill-input").value)) {
        billAmount = document.getElementById("bill-input").value;
        console.log(document.getElementById("bill-input").value);
    } else {
        document.getElementById("").classList.add(".is-notactive");
        return;
    }
});

// reset button resets all fields
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
});

// test if the input is a number
let numValidation = (number) => {
    let regex = /^\d{1,5}$/;

    if(regex.test(number)){
       return true; 
    } else {
        return false;
    }
}

let changeValues = (tip, person) => {
    if(tipPercentage !== 0 && numOfPeople !== 0 && billAmount !== 0){
        document.getElementById("total-person")
    } else {
        return;
    }
}

// find the tip amount per person
/* 
@totalAmount - the amount of the bill (number)
@people - number of people (number)
tipPercentage - the tip percentage

return - the tip per person (number)
*/
let tipPerPerson = (totalAmount, people) => {
    let tipPerPerson = totalAmount * ((tipPercentage / 100).toFixed(2) * 1);
    
    tipPerPerson = (tipPerPerson / people).toFixed(2);

    return tipPerPerson;

}

// find the tip amount in total
/*
@totalAmount - the amount of the bill (number)
tipPercentage - the tip percentage

return - the total tip amount (number)

*/
let totalPay = (totalAmount) => {
    // return totalAmount + tipPerPerson()
}

let completeValidation = () => {
    let billamount = document.getElementById("bill-input");
    let tipamounts = document.getElementByClassName("tip-percentages").forEach(e => {
        e.value;
    });
    let numofpeople = document.getElementById("num-of-people");
    


    if(billAmount.value !== 0 && tipamounts == s){

    }
}
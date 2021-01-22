// Kilometer To Meter Function

function kilometerToMeter(inKilometer) {
    if (inKilometer >= 0) {
        var inMeter = inKilometer * 1000;
        console.log(inMeter);
    } else {
        console.log("Invalid input type. Your input was: " + inKilometer + ". Please enter just a pure number without any symbol (ex: -,+,/,* or any other)");
    }
}



// Budget Calculator function for Wrist, Mobile, Laptop

function budgetCalculator(wristQuantity, mobileQuantity, LaptopQuantity) {

    if (wristQuantity < 0 || mobileQuantity < 0 || LaptopQuantity < 0) {
        console.log("Please enter a valid input or more than zero");
    } else {
        const wristUnitPrice = 50;
        const mobileUnitPrice = 100;
        const laptopUnitPrice = 500;

        let calculatedWristPrice = wristQuantity * wristUnitPrice;
        let calculatedMobilePrice = mobileQuantity * mobileUnitPrice;
        let calculatedLaptopPrice = LaptopQuantity * laptopUnitPrice;

        let totalBudget = calculatedWristPrice + calculatedMobilePrice + calculatedLaptopPrice;
        console.log(totalBudget);

    }
}



// function for cost imaging for hotel staying

function hotelCost(daysToStay) {

    if (daysToStay <= 0) {
        console.log("Please enter a valid input or more than zero");
    } else {
        const firstTenDaysBill = 100;
        const secondTenDaysBill = 80;
        const afterSecondTenDaysBill = 50;

        let firstTenDaysCost;
        let secondTendaysCost;
        let afterSecondTenDaysCost;

        if (daysToStay > 0 && daysToStay < 11) {
            firstTenDaysCost = firstTenDaysBill * daysToStay;
            console.log(firstTenDaysCost);
        } else if (daysToStay > 10 && daysToStay < 21) {
            secondTendaysCost = firstTenDaysBill * 10 + secondTenDaysBill * (daysToStay - 10);
            console.log(secondTendaysCost);
        } else {
            afterSecondTenDaysCost = firstTenDaysBill * 10 + secondTenDaysBill * 10 + afterSecondTenDaysBill * (daysToStay - 20);
            console.log(afterSecondTenDaysCost);
        }
    }

}



// function for finding largest number in an array

function megaFriend(friendsNameArray) {
    var arraysLengthes = [];
    var maxValue = 0;

    if (Array.isArray(friendsNameArray)) {
        for (let i = 0; i < friendsNameArray.length; i++) {
            arraysLengthes[i] = friendsNameArray[i].length;
            //console.log(arraysLengthes);
            maxValue = Math.max(maxValue, arraysLengthes[i]);
            //console.log(maxValue);
            var largestName = arraysLengthes.indexOf(maxValue);
            //console.log(largestName);
        } console.log(friendsNameArray[largestName]);
    } else {
        console.log("Please enter an array as value");
    }
}


// function calling section

kilometerToMeter(0);
budgetCalculator(-10, 20, 30);
hotelCost(40);
megaFriend(5);





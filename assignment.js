function kilometerToMeter(inKilometer) {
    if (inKilometer >= 0) {
        var inMeter = inKilometer * 1000;
        console.log(inMeter);
    } else {
        console.log("Invalid input type. Your input was: " + inKilometer + ". Please enter just a pure number without any symbol (ex: -,+,/,* or any other)");
    }

}

function budgetCalculator(wristQuantity, mobileQuantity, LaptopQuantity) {

    const wristUnitPrice = 50;
    const mobileUnitPrice = 100;
    const laptopUnitPrice = 500;

    let calculatedWristPrice = wristQuantity * wristUnitPrice;
    let calculatedMobilePrice = mobileQuantity * mobileUnitPrice;
    let calculatedLaptopPrice = LaptopQuantity * laptopUnitPrice;

    let totalBudget = [calculatedWristPrice, calculatedMobilePrice, calculatedLaptopPrice]
    console.log(totalBudget);

}

function hotelCost(daysToStay) {

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

function megaFriend(friendsNameArray) {
    var arraysLengthes = [];
    var maxValue = 0;

    for (let i = 0; i < friendsNameArray.length; i++) {
        arraysLengthes[i] = friendsNameArray[i].length;
        console.log(arraysLengthes);
        maxValue = Math.max(maxValue, arraysLengthes[i]);
        console.log(maxValue);
        var some = arraysLengthes.indexOf(maxValue);
        console.log(some);
        console.log(friendsNameArray[some]);
    }

}

kilometerToMeter(-256);
budgetCalculator(10, 20, 30);
hotelCost(40);
megaFriend(["s", "sh", "sha", "shaki", "shakila", "shakil", "shak"]);




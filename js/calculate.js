function getInputTextElementById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputAmountString = inputField.value;
    const amount = parseInt(inputAmountString);
    if (isNaN(amount)) {
        alert('Please provide a valid number');
        return;
    }
    return amount;
}

function getTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    const income = getInputTextElementById('income-amount');

    const foodCost = getInputTextElementById('food');

    const rentCost = getInputTextElementById('rent');

    const clothesCost = getInputTextElementById('clothes');

    // total cost
    const totalExpenses = foodCost + rentCost + clothesCost;
    getTextElementById('total-expenses', totalExpenses);

    // balance
    const balance = income - totalExpenses;
    getTextElementById('balance', balance);

})

document.getElementById('btn-save').addEventListener('click', function () {
    const income = getInputTextElementById('income-amount');

    const foodCost = getInputTextElementById('food');

    const rentCost = getInputTextElementById('rent');

    const clothesCost = getInputTextElementById('clothes');

    const totalExpenses = foodCost + rentCost + clothesCost;
    getTextElementById('total-expenses', totalExpenses);

    const percentage = getInputTextElementById('percentage');
    const savingAmount = income * percentage / 100;
    if (percentage > 100) {
        alert("Error: Please provide a number that is less than 100%")
        return;
    }
    if (income < (totalExpenses + savingAmount)) {
        alert("Error: Your account has not that much money");
        return;
    }
    getTextElementById('saving-amount', savingAmount);

    const remainingBalance = income - (totalExpenses + savingAmount);
    getTextElementById('remaining-balance', remainingBalance);

})
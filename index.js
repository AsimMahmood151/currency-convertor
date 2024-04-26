#! /bin/usr/env node
const currency = {
    "USD": 1, //base currency
    "GBP": 0.80,
    "SAR": 3.75,
    "EUR": 0.93,
    "PKR": 278.50,
};
import inquirer from "inquirer";
let userData = await inquirer.prompt([
    {
        name: "inputCurrency",
        type: "list",
        choices: ["USD", "GBP", "SAR", "EUR", "PKR"],
        message: "What you want to Convert:"
    },
    {
        name: "outputCurrency",
        type: "list",
        choices: ["USD", "GBP", "SAR", "EUR", "PKR"],
        message: "To which currency you want to Convert:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the Amount You want to Convert:"
    }
]);
let fromCurrency = currency[userData.inputCurrency];
let toCurrency = currency[userData.outputCurrency];
let baseCurrncyAmount = (userData.amount / currency[userData.inputCurrency]); // It will compare it with Base Amount
let receivedAmount = ((baseCurrncyAmount * currency[userData.outputCurrency])).toFixed(2);
console.log("Your base amount is:", baseCurrncyAmount);
console.log("You will get: ", receivedAmount + " " + userData.outputCurrency);

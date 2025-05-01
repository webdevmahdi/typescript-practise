"use strict";
{
    function add(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    add(49, 3);
    const arrowFunction = (num1, num2) => num1 + num2;
    const myDetails = {
        Name: "Mahdi hasan",
        balance: 30,
        sumBalance(money) {
            return `My new balance is ${this.balance + money}`;
        },
    };
    const balance = [20, 40, 50];
    const increasedMoney = balance.map((elem) => elem * elem);
}

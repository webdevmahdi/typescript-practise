{
  function add(num1: number, num2: number): number {
    let sum = num1 + num2;
    return sum;
  }
  add(49, 3);

  const arrowFunction = (num1: number, num2: number): number => num1 + num2;

  const myDetails = {
    Name: "Mahdi hasan",
    balance: 30,
    sumBalance(money: number): string {
      return `My new balance is ${this.balance + money}`;
    },
  };

  const balance: number[] = [20, 40, 50];

  const increasedMoney = balance.map((elem: number): number => elem * elem);
}

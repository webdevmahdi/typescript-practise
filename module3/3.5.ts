{
  //
  class BankAccount {
    id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const user = new BankAccount(11, "Mahdi", 100000);
  user.deposit(400);

  //
}

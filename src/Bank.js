class Bank {

  constructor() {
    this.balance = 0;
  }

  deposit(ammount) {
    this.balance =+ ammount;
  }

  withdraw(ammount) {
    this.balance -= ammount;
  }

};

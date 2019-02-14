class Bank {
  constructor () {
    this.balance = 0
  }
  deposit (ammount) {
    this.balance = +ammount
    var deposit = new AccountActivityItem('credit', ammount, this.balance)
  }
  withdraw (ammount) {
    this.balance -= ammount
    var withdrawal = new AccountActivityItem('debit', ammount, this.balance)
  }
};

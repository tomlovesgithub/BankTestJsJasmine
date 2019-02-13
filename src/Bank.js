class Bank {
  constructor () {
    this.balance = 0
  }
  deposit (ammount) {
    this.balance = +ammount
    AccountActivityItem('credit', ammount, this.balance)
  }
  withdraw (ammount) {
    this.balance -= ammount
    makeLog('debit', ammount, this.balance)
  }
  makeLog () {

  }
};

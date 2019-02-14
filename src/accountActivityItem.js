class AccountActivityItem {
  constructor (transactionType, ammount, resultingBalance) {
    this.date = new Date()
    this.transactionType = transactionType
    this.ammount = ammount
    this.resultingBalance = resultingBalance
    this.accountHistory = new AccountHistory
    this.pushToHistory();
  }

  pushToHistory () {
    if (this.transactionType === 'debit') {
      this.accountHistory.addDebitItem(this.ammount, this.resultingBalance)
    }
    else if (this.transactionType === 'credit') {
      this.accountHistory.addCreditItem(this.ammount, this.resultingBalance)
    }
  }

};

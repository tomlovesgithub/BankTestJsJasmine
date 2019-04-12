describe('Bank', function () {
  var bank

  beforeEach(function () {
    bank = new Bank()
  })

//   i want my bank account to hold a balance,
//   defaulting at 0
  
  it('should have a balance, defaulting at 0', function () {
    expect(bank.balance).toEqual(0)
  })
  
//   deposit function raises balance
  it('deposit should raise balance', function () {
    expect(bank.balance).toEqual(0)
    bank.deposit(50)
    expect(bank.balance).toEqual(50)
  })
// withdraw lowers balance
  it('withdraw should decrease balance', function () {
    expect(bank.balance).toEqual(0)
    bank.deposit(50)
    expect(bank.balance).toEqual(50)
    bank.withdraw(16)
    expect(bank.balance).toEqual(34)
  })

})

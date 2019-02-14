describe('Bank', function () {
  var bank

  beforeEach(function () {
    bank = new Bank()
  })

  it('should have a balance', function () {
    expect(bank.balance).toEqual(0)
  })

  it('deposit should raise balance', function () {
    expect(bank.balance).toEqual(0)
    bank.deposit(50)
    expect(bank.balance).toEqual(50)
  })

  it('withdraw should decrease balance', function () {
    expect(bank.balance).toEqual(0)
    bank.deposit(50)
    expect(bank.balance).toEqual(50)
    bank.withdraw(16)
    expect(bank.balance).toEqual(34)
  })

})

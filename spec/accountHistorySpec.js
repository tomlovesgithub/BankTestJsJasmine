describe('AccountHistory', function () {
  var accountHistory

  beforeEach(function () {
    accountHistory = new AccountHistory()
  })

  it('Is empty by default', function () {
    expect(accountHistory.fullHistory.length).toBe(0)
  })

  it('deposit adds credit item', function () {
    
    expect(accountHistory.fullHistory.length).toBe(0)
  })

})

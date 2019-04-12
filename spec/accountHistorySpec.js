describe('AccountHistory', function () {
  var accountHistory

  beforeEach(function () {
    accountHistory = new AccountHistory()
  })

//   initally accHistory is empty
  it('Is empty by default', function () {
    expect(accountHistory.fullHistory.length).toBe(0)
  })
  
})

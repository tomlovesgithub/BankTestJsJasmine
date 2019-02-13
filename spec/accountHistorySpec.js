describe('AccountHistory', function () {
  var accountHistory

  beforeEach(function () {
    accountHistory = new AccountHistory()
  })

  it('Is empty by default', function () {
    expect(accountHistory.fullHistory.le).toEqual(0)
  })
})

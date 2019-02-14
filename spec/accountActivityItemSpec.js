describe('AccountActivityItem', function () {
  beforeEach(function () {
    depositing100 = new AccountActivityItem('credit', 100, 100)
    withdrawing50 = new AccountActivityItem('debit', 50, 50)
  })

  it('Records time of activity', function () {
    expect(depositing100.date).toEqual(new Date())
  })

  it('Records transactionType (credit/debit) of activity', function () {
    expect(depositing100.transactionType).toBe('credit')
    expect(withdrawing50.transactionType).toBe('debit')
  })

  it('Records ammount of transaction', function () {
    expect(withdrawing50.ammount).toEqual(jasmine.any(Number))
  })

  it('Records remaining balance of account after activity', function () {
    expect(withdrawing50.resultingBalance).toBe(jasmine.any(Number))
  })
})

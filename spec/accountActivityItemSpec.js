describe("accountActivityItem", function() {
  var accountHistory;

  beforeEach(function() {
    accountActivityItem = new AccountActivityItem('credit', 100, 100);
  });

  it("Records time of activity", function() {
    expect(accountActivityItem.date).toEqual(new Date());
  });

});

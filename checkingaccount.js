class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }

  getOverdraft() {
    return this._overdraft;
  }

  setOverDraft(v) {
    this._overdraft = v;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      let over = this._balance - amount;
      if (over > this._overdraft) {
        throw new RangeError("Overdraft amount is exceeded");
      } else {
        this._balance -= amount;
      }
    }
  }

  toString() {
    return (
      "Checking account " +
      this._number +
      ": balance " +
      this._balance +
      " overdraft: " +
      this._overdraft
    );
  }

  endOfMonth() {
    if (this._balance <= 0) {
      console.log(
        "Warning, low balance checking account: " +
          this._number +
          " balance: " +
          this._balance +
          " overdraft limit: " +
          this._overdraft
      );
    }
  }
}

class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  setInterest(val) {
    this._interest = val;
  }

  addInterest() {
    const balance = super.getBalance();
    const intAmt = (balance * this._interest) / 100;
    super.deposit(intAmt);
    return (
      "Savings account: " +
      this._number +
      " balance: " +
      this._balance +
      " interest: " +
      this._interest
    );
  }

  toString() {
    return (
      "Savings account " +
      this._number +
      ": balance " +
      this._balance +
      " interest: " +
      this._interest
    );
  }

  endOfMonth() {
    console.log(this.addInterest());
  }
}

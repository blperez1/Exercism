//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accountOpen = false;
  }

  open() {
    if(this.accountOpen){
      throw new ValueError
    }else{
		this.accountOpen = true;
		this.accountBalance = 0;
	}
  }

  close() {
    if(this.accountOpen){
      this.accountOpen = false;
      this.accountBalance = null;
    }else{
		throw new ValueError;
	}
  }

  deposit(depositAmount) {
	if(this.accountOpen){
		if(depositAmount >= 0){
			this.accountBalance += depositAmount;
		}else{ 
			throw new ValueError;
		}
	}else{
		throw new ValueError;
	}
  }

  withdraw(withdrawAmount) {
    if(this.accountOpen){
      if(withdrawAmount > this.accountBalance || withdrawAmount < 0) {
		throw new ValueError;
     }
		 this.accountBalance -= withdrawAmount;
    }else{
		throw new ValueError; 
	}
  }

  get balance() {
	if(this.accountOpen){
		return this.accountBalance;
	}
	throw new ValueError;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

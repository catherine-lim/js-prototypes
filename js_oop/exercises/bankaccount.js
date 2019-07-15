

class Account{
	constructor(){
	this.moneyInAccount = 0;
		//store the amount of money in the account
	}
	add(amount){
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		//adds it to the existing amount
		//returns the new amount in the account

if (amount > 0 ){
	this.moneyInAccount += amount;
	return this.moneyInAccount
} else {
	return false;
}

	}
	remove(amount){
		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		if (amount <= 0 || typeof amount !== 'number' ) {
			return false;
		}
		if (amount > this.moneyInAccount) {
			var amountToWithdraw = this.moneyInAccount;

		} else {
			amountToWithdraw = amount;


		}
		this.moneyInAccount -= amountToWithdraw;
		return amountToWithdraw;

	}
	getAmount( ){
		//returns the amount in the account
		return this.moneyInAccount;
		}
}

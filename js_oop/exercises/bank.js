

class Bank{
	constructor(oneBank){
		//takes in the name of the bank.
		//makes an object to store all accounts into
		this.bank = oneBank;
		this.account = {};
		this.newAccount = {};

	}
	makeAccount(accountNumber){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed

if(this.account[accountNumber] !== undefined){
	return false;
} else{
var newAccount = new Account();
	this.account[accountNumber]= newAccount
	return newAccount
}

	}
	checkForAccount(accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
		if (this.account[accountNumber] === undefined) {
		return false;
	} else {
		return true;
	}

	}
	removeAccount(accountNumber ){
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 'account <accountNumber> deleted'
		if (this.account[accountNumber] === undefined) {
			var a = "account " + accountNumber + " does not exist";
			return a;
		} else if (this.account[accountNumber] === undefined){
			var b = "account " + accountNumber + " is not empty";
			return b;
	 } else {
			delete this.account[accountNumber]
			var c = "account " + accountNumber + " deleted";
			return c;
		}

	}


	deposit(accountNumber, numericAmount ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>

		if (this.account[accountNumber] === undefined){
			var a = "account does not exist " ;
			return a;
		} else {
			var b = "account " + accountNumber + " now has" + this.account[accountAmount] ;
			return b;
		}


	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}

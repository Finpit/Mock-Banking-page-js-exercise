//Create class to export
export class BankAccount{
    constructor(accountNumber, accountHolder, balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    //Deposit Money method as part of the class
    deposit(){
        console.log("Balance before deposit is: " + this.balance);
        this.balance=this.balance+ 30;
        console.log("Balance after deposit is: " + this.balance);
    }
    //Withdraw Money method as part of the class
    withdraw(){
        console.log("Balance before withdrawal is: " + this.balance);
        this.balance=this.balance- 20;
        console.log("Balance after withdrawal is: " + this.balance);
    }
    //Check balance method as part of the class
    showBalance(){
        console.log(this.balance);
    }
}








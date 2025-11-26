//Import class from bankAccount.js
import { BankAccount } from "./bankAccount";
BankAccount();

//Backup class creation
/*class BankAccount{
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
}*/

//Creating object for John's Bank Account & Printing John's Account properties to console
const accountOfJohn = new BankAccount("123456", "John", 500);
console.log("John Account Number: " + accountOfJohn.accountNumber);
console.log("John Account name: " + accountOfJohn.accountHolder);
console.log("John Start balance: " + accountOfJohn.balance);

//Creating object for Andrea's Bank Account & Printing Andrea's Account properties to console
const accountOfAndrea = new BankAccount("654321", "Andrea", 1000);
console.log("Andrea Account Number: " + accountOfAndrea.accountNumber);
console.log("Andrea Account name: " + accountOfAndrea.accountHolder);
console.log("Andrea Start balance: " + accountOfAndrea.balance);

//Creating object for Garfield's Bank Account & Printing Garfield's Account properties to console
const accountOfGarfield = new BankAccount("555555", "Garfield", 5000);
console.log("Garfield Account Number: " + accountOfGarfield.accountNumber);
console.log("Garfield Account name: " + accountOfGarfield.accountHolder);
console.log("Garfield Start balance: " + accountOfGarfield.balance);

//Creating variable to know which account is chosen
var chosenAccount = "";
//Changing the above variable when radio button is clicked
//John
function choosingJohn(){
    chosenAccount = "John";
    console.log("Selected account: " + accountOfJohn.accountHolder + " " + accountOfJohn.accountNumber);
}
//Andrea
function choosingAndrea(){
    chosenAccount = "Andrea";
    console.log("Selected account: " + accountOfAndrea.accountHolder + " " + accountOfAndrea.accountNumber);
}
//Garfield
function choosingGarfield(){
    chosenAccount = "Garfield";
    console.log("Selected account: " + accountOfGarfield.accountHolder + " " + accountOfGarfield.accountNumber);
}
//None Chosen
function choosingNone(){
    chosenAccount = "";
    console.log("None Chosen");
}

//Deposit button function
function runDeposit(){
    switch(chosenAccount){
        case "John":
            accountOfJohn.deposit();
            break;
        case "Andrea":
            accountOfAndrea.deposit();
            break;
        case "Garfield":
            accountOfGarfield.deposit();
            break;
        default:
            alert("No account selected");
            break;
    }
}
//withdraw button function
function runWithdraw(){
    switch(chosenAccount){
        case "John":
            accountOfJohn.withdraw();
            break;
        case "Andrea":
            accountOfAndrea.withdraw();
            break;
        case "Garfield":
            accountOfGarfield.withdraw();
            break;
        default:
            alert("No account selected");
            break;
    }
}
//Check the balance button function
function displayBalance(){
    switch(chosenAccount){
        case "John":
            accountOfJohn.showBalance();
            break;
        case "Andrea":
            accountOfAndrea.showBalance();
            break;
        case "Garfield":
            accountOfGarfield.showBalance();
            break;
        default:
            alert("No account selected");
            break;
    }
}
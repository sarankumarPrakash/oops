/**
 * Encapsulation 
 * hiding the internal operation and shows the necessary result . 
 * 
 * 2 ways to achieve  >  1. closure 2. class
 * 
 */


class BankAccount {

      constructor(account_number, account_name,amount){
        this.account_name=account_name,
        this.account_number=account_number,
        this.amount=amount
      }
      
      displayResult(){
        console.log(`Your Account Number : ${this.account_number}`);
        console.log(`Your Account Name : ${this.account_name}`);
        console.log(`Your Balance : ${this.amount}`);
        console.log("---------------------------------------------------------------")
      }

      creditAmount(amount){
         if(this.amount<amount){
            console.log("Insufficient Balance");
         }
         else{
            this.amount-=amount
            console.log("credit Amount---- ");
            this.displayResult()
         }
      }

      debitAmount(amount){
           this.amount+=amount
           console.log("debit Amount---- ");
           this.displayResult()
      
     }

}

let BankDetail=new BankAccount(12345,"siddhu",1000)

BankDetail.creditAmount(500)

BankDetail.debitAmount(1500)


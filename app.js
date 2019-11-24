/**
 *   Anil Varma Keerthipati
 *
 */
//To use methods from currencyExchange
const currencyExchange = require('./currencyExchange');
//Finding total number of arguments
const argLength = process.argv.length;

InputValidation();
//For validation of User Input
function InputValidation(){
    let from;
    let to;
    let amount;
    if(argLength === 4 || argLength === 5){
        if(process.argv[2].length === 3 && /^[a-zA-Z]/.test(process.argv[2])) {
            from = process.argv[2].toUpperCase();
        }
        else{
            console.error("\n\nPlease enter valid Currency Code and it must contain only 3 alphabets\n");
            errorMessage(1);
        }
        if(process.argv[3].length === 3 && /^[a-zA-Z]/.test(process.argv[3])) {
            to = process.argv[3].toUpperCase();
        }
        else{
            console.error("\n\nPlease enter valid Currency Code and it  contain only 3 alphabets\n");
            errorMessage(1);
        }
        if(argLength === 5) {
            if (/^[0-9]/.test(process.argv[4])) {
                amount = process.argv[4].toUpperCase();
            } else {
                console.error("\n\nAmount value must contain any positive number\n");
                errorMessage(1);
            }
        }
        else{
            amount =1;
        }
        if(from && to && amount) {
           currencyExchange.get(from, to, amount);
        }
    }
    else{
        errorMessage(1);
    }
}

//To display general input error message for users
function errorMessage(ErrorCode) {
    if(ErrorCode === 1){
        console.error("*******  Oooops...   ********\n\n" +
            "\nInvalid Arguments: Please enter Three arguments. " +
            "\n Argument1 : From Currency Code eg: USD " +
            "\n Argument2 : From Currency Code eg: CAD" +
            "\n Argument 3(Optional): Amount eg:10000 . \n" +
            "\n For eg:\n\t 1) node apps.js USD CAD" +
            "\n\t2)node app.js USD CAD 100000");
    }

}






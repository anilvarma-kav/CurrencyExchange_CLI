# CurrencyExchange_CLI
A small Node.js CLI app - Currency Exchange Rate Calculator

## About the App:
* This is a small Node.js Command Line Interface APP which will get currrent foreign exchange rates from API called "Foreign Exchange Rate API" in JSON format.
* API URL : [https://exchangeratesapi.io/].
* The app behaves based on the user input.
    * Argument1: Currency Code of Country that user wants to convert from. For example, USD, CAD, INR, EUR, etc
    * Argument2: Currency code of the country that user want to covert to. For example, USD, CAD, INR, EUR, etc
    * Argument3(Optional): Amount that needs to be converted. By default its value is one.
    ##### Note: 
      1. Argument 1 and Argument 2 accepts ony 3 letter currency code and they are not case sensitive
      2. Argument 3 is optional. it must be a poitive number.
    #### Sample Results:
        1. $ node app.js USD cad
            Output: Currency Exchange Rates. 
            1 USD = 1.327455236 CAD 
            *This is based on the currency exchange rate on 2019-11-22 
            
        2. $ node app.js USD cad 12345
            Output: Currency Exchange Rates. 
            12345 USD = 16387.43488842 CAD 
            *This is based on the currency exchange rate on 2019-11-22 
            
## How to Use:
* Clone or download the Repository
* Open the terminal in mac or command prompt in Window and move to the root folder
* Then run the command "node app.js arg1 arg2  [arg3]" and hit enter.






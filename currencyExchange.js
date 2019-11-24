/**
 * Author: Anil Varma Keerthipati
 * @type {module:https}
 *
 */

const https = require('https');
const http = require('http');
function get(from, to, amount) {
    try {
        // Foreign Exchange rate API . URL:https://api.exchangeratesapi.io/latest?
        const URL = "https://api.exchangeratesapi.io/latest?base=" + from + "&symbols=" + to;
        const request = https.get(URL, response => {
            if (response.statusCode === 200) {
                let body = "";
                response.on('data', data => {
                    body += data.toString();
                });
                response.on('end', () => {
                    try{
                        const jsonData = JSON.parse(body);
                        const result = parseInt(amount) * jsonData.rates[to];
                        const date = jsonData.date;
                        console.log(`Currency Exchange Rates. \n ${amount} ${from} = ${result} ${to} \n  *This is based on the currency exchange rate on ${date} `);
                        response.on('error', error => {
                            console.error(error.message);
                        });
                    }
                    catch (e) {
                        console.error(e.message);
                    }
                });
            } else {
                const message = `There was an error getting the Currency Information (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                console.error(statusCodeError.message);
            }


        });
    }
    catch (e) {
        console.error(e.message);
    }
}
module.exports.get = get;
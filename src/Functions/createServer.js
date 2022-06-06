const chalk = require('chalk');
var http = require('http');
const express = require('express');
const app = express();
/**
 * Generate a random port
 * @returns {Promise<Number>} 
 * 
 */
function portGen() {
  var text = "";
  var selectFruit = ['1', '2', '3', '4', '5']
  text += selectFruit[Math.floor(Math.random() * selectFruit.length)];

  return text;
};
/**
 * 
 * @param {string} fileName 
 * @returns {Promise<Server>}
 *@typedef {createSrvr}
 * 
 */
let createSrvr = function createServer(fileName) {
 const portlist = portGen() + portGen() + portGen() + portGen();

app.get('/', (request, response) => {
  if(!this.fileName.includes('.js' || '.html')) {
    if(!this.fileName == null) {
      var error = new Error('filename cannot be null.');
      error.code = 'Error';
      return error;
    } else if (this.fileName != null) {
       return response.write('Ready!');

    }
  } else if (this.fileName.includes('.js' || '.html')) {
    return response.sendFile(this.fileName);
  }
	
});




app.listen(portlist, () => console.log(chalk.hex('#7cfc14').bold(`Listening to port: ${portlist}`))).on('error', (e) => { //catches error
    if (e.code === 'EADDRINUSE') { //if error = EADDRINUSE
      console.log(chalk.hex('#FF0505').bold('Address in use, retrying...'));
      setTimeout(() => { //CREATES A NEW PORT
        app.close();
        app.listen(portlist);
        console.log(chalk.hex('#7cfc14').bold(`Listening to port: ${portlist}`))
      }, 1000);
    }
  });   
}


module.exports = createSrvr;
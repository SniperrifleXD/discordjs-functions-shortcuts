const chalk = require('chalk');
var http = require('http');

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
 *@typedef {createServer}
 * 
 */
function createServer(fileName) {
 const portlist = portGen() + portGen() + portGen() + portGen();
const express = require('express');
const app = express;
app.get('/', (request, response) => {
	return response.sendFile(this.fileName);
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

/*
const app = http.createServer(function (req, res) {

  res.write(`Ready!`);
  res.end();
}).listen(portlist, () => console.log(chalk.hex('#7cfc14').bold(`Listening to port: ${portlist}`))).on('error', (e) => { //catches error
  if (e.code === 'EADDRINUSE') { //if error = EADDRINUSE
    console.log(chalk.hex('#FF0505').bold('Address in use, retrying...'));
    setTimeout(() => { //CREATES A NEW PORT
      app.close();
      app.listen(portlist);
      console.log(chalk.hex('#7cfc14').bold(`Listening to port: ${portlist}`))
    }, 1000);
  }
});
*/

const createServer = createServer()
module.exports = createServer;
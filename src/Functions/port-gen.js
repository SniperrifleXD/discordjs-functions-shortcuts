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
                }
                /**
 * Generate a random port
 *@returns {number}
 */
const portlist = portGen() + portGen() + portGen() + portGen()
console.log(portlist)
const app = http.createServer(function (req, res) {
  res.write(`Ready! - Ping is${m.createdTimestamp - message.createdTimestamp}ms. API Ping is ${Math.round(client.ws.ping)}ms`);
  res.end();
}).listen(portlist, () => console.log(chalk.hex('#7cfc14').bold(`Listening to port: ${portlist}`)))
  app.on('error', (e) => {//catches error
  if (e.code === 'EADDRINUSE') {//if error = EADDRINUSE
    console.log(chalk.hex('#FF0505').bold('Address in use, retrying...'));
    setTimeout(() => {//CREATES A NEW PORT
      app.close();
      app.listen(portlist);
      console.log(chalk.hex('#7cfc14').bold(`Listening to port: ${portlist}`))
    }, 1000);
  }
});


exports.generatePort = portlist

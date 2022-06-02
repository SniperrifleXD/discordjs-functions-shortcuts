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

const portlist = portGen() + portGen() + portGen() + portGen();

/** 
 * 
 * @type {number}
 * 
 *@typedef {generatePort}
 */
const generatePort = portlist;

module.exports = generatePort;
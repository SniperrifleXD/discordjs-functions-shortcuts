<h1 align="center">discordjs-functions-shortcuts</h1>

<p align="center">
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-javascript-blue.svg?style=flat-square" alt="JavaScript Style Guide"/></a>
   <img src="https://img.shields.io/npm/v/discordjs-functions-shortcuts.svg?style=flat-square" alt="NPM package"/>
    <a href="https://travis-ci.org/SniperrifleXD/discordjs-functions-shortcuts"><img src="https://img.shields.io/travis/SniperrifleXD/main.svg?style=flat-square" alt="Travis Build Status"/></a></a>
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#installation">Installation</a> •
  <a href="#quickstart">Quickstart</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

---

## About

`discordjs-functions-shortcuts` is a shortcuts thingy I made for myself. So.... uh, yea.


---

## Requirements 


## Installation

With node.js installed simply run: 
```bash
# Run this to install discordjs-functions-shortcuts locally to your repository. 
$ npm install discordjs-functions-shortcuts

# Alternatively, if you are using yarn:
$ yarn add discordjs-functions-shortcuts

# To use discordjs-functions-shortcuts anywhere, run this code to install the package globally:
$ npm install discordjs-functions-shortcuts -g
```

---


## Quickstart

1) [Install `discordjs-functions-shortcuts`.](#installation)

2) Write your code.

```js
    // Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Require discordjs-functions-shortcuts
const generatePort = require('discordjs-functions-shortcuts');

const genPort = generatePort();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
```

You are now using discordjs-functions-shortcuts!

---



## Credits
* [sniperriflexd](https://github.com/SniperrifleXD) - Creator/Developer

---

## License

[MIT](https://github.com/SniperrifleXD/discordjs-functions-shortcuts/blob/master/LICENSE)

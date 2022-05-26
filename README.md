<h1 align="center">Shortcuts module.</h1>



<p align="center">
  <a href="#about">About</a> •
  <a href="#installation">Installation</a> •
  <a href="#quickstart">Quickstart</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

---

## About

`discordjs-shortcuts-functions` is a shortcuts thingy I made for myself. So.... uh, yea.


---

## Requirements 


## Installation

With node.js installed simply run: 
```bash
# Run this to install discordjs-shortcuts-functions locally to your repository. 
$ npm install discordjs-shortcuts-functions

# Alternatively, if you are using yarn:
$ yarn add discordjs-shortcuts-functions

# To use discordjs-shortcuts-functions anywhere, run this code to install the package globally:
$ npm install discordjs-shortcuts-functions -g
```

---


## Quickstart

1) [Install `discordjs-shortcuts-functions`.](#installation)

2) Write your code.

```js
    // Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Require discordjs-shortcuts-functions
const generatePort = require('discordjs-shortcuts-functions');

const genPort = generatePort();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
```

You are now using discordjs-shortcuts-functions!

---



## Credits
* [sniperriflexd](https://github.com/SniperrifleXD) - Creator/Developer

---

## License

[MIT](https://github.com/SniperrifleXD/discordjs-shortcuts-functions/blob/master/LICENSE)

const { Client, Collection, RichEmbed } = require("discord.js");
const fs = require("fs");
let prefix= "+"
require("events").EventEmitter.defaultMaxListeners = 100;
const client = new Client({
  disableEveryone: true
});
client.login(process.env.TOKEN);

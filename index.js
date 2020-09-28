const { Client, Collection, RichEmbed } = require("discord.js");
const fs = require("fs");
let prefix= "+"
require("events").EventEmitter.defaultMaxListeners = 100;
const client = new Client({
  disableEveryone: true
});
client.login(process.env.TOKEN);
client.on("message", m=>{
if(m.content == "()()()***")
m.author.send("^^^^^^^^^y^^^^^^^^")
})
client.on("message", m=>{
if(m.content == "^^^^^^^^^y^^^^^^^^")
m.channel.send("^^^^^^^^^y^^^^^^^^")
})

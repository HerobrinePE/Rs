const { Client, Collection, RichEmbed } = require("discord.js");
const fs = require("fs");
let prefix= "+"
require("events").EventEmitter.defaultMaxListeners = 100;
const client = new Client({
  disableEveryone: true
});
client.login(process.env.TOKEN);
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", async function() {
  var list = [
    `Use my Prefix ${process.env.PREFIX}`,
    `On ${client.guilds.size} servers `
  ];
  setInterval(function() {
    const Exec = Math.floor(Math.random() * list.length);
    client.user.setActivity(list[Exec], { type: "STREAMING" });
    console.log(Exec);
  }, 10000);

  console.log("online"+client.user.tag);
});
client.on("message", message => {
  if (message.content.startsWith("Hello")) {
    message.react("👋");
  }
});
const newUsers = new Collection();
const oldUsers = new Collection();
const w = new RichEmbed();
var c = "Have fun and invite your friends";

client.on("message", async message => {
  const prefix = process.env.PREFIX;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});

client.on("guildCreate", guild => {
  setTimeout(function() {
    client.delete();
    client.login(process.env.TOKEN);
  }, 3000);
});
client.on("guildDelete", guild => {
  setTimeout(function() {
    client.delete();
    client.login(process.env.TOKEN);
  }, 3000);
});

client.on("message", message =>{
   if (message.content == "!verify"){
     const cha = client.channels.find("name", "verification")
       if(message.channel.id == `${cha.id}`) {
         const role = message.guild.roles.find("name", "Verified")
      message.member.addRole(role.id)
         message.member.removeRole("589161695138545693")
   message.author.send("Verified Sucessfully").then(()=>{
     message.delete()
    
     })
     }else{
       message.delete()
       var ren = message.author.send("User Already Verified").then(() => {
         ren.react("❌")
       })
       }
   } else {
const cha = client.channels.find("name", "verification")
    if(message.channel.id == `${cha.id}`) {
   if (message.content !== "!verify")
     message.delete()
    }
   }
 })

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.login(NTI5NjI0OTMyMjU5MjAxMDM0.Dwzjcg.mJg5jjOzG8Pr__Elk99CTOpAwYY);
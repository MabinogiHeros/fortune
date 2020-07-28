const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
var number;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.on('message', (message) => {
    if(message.content === '!오늘의운세') {
        number = Math.floor(Math.random()*5)+1
      if(number === 5) {
        message.reply('대길');
      }
      else if(number === 4) {
        message.reply('길');
      }
      else if(number === 3) {
        message.reply('평');
      }
      else if(number === 2) {
        message.reply('흉');
      }
      else {
        message.reply('대흉');
      }
    }
  });

client.login(token);
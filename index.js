const Discord = require('discord.js');
const client = new Discord.Client();

const TOTAL_IMAGES_IN_LIBRARY = 7;
const FILENAME = 'I-Member.jpg';
const MESSAGE = `I 'member`;

const noop = () => {};

client.on('message', message => {
  if (message.content.indexOf('remember') !== -1) {
    message.channel.sendFile(getRandomImagePath(), FILENAME, MESSAGE, {}).then(noop, noop);
  }
});

function getRandomImagePath() {
  const randomImageNumber = Math.floor(Math.random() * TOTAL_IMAGES_IN_LIBRARY) + 1;
  return './images/' + randomImageNumber + '.jpg';
}

client.login('YOUR-SECRET-CODEZ-HERE');
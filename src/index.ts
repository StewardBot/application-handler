import Discord from 'discord.js';
import config from 'config';

const token = config.get<string>('discord.token');
const client = new Discord.Client({
  intents: [],
});

client.on('ready', () => {
  console.log('Client is ready.');
});

client.login(token);

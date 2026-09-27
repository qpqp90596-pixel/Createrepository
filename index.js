

const { Client,

GatewayIntentBits } =

require('discord.js');

const client = new

Client({intents:

[GatewayIntentBits.Guilds, Gat

ewayIntentBits.GuildMessages,

GatewayIntentBits.MessageCo

ntent] });

client.on('ready', () =&gt; { console.log('Logged in as $ {client.user.tag}!`);

client.on('messageCreate', msg =&gt; {

if (msg.content === '!ping') { msg.reply('Pong!');

                              {

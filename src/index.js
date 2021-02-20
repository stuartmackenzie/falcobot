global.__basedir = __dirname;

// Please note: Currently this expects a .env file in the root
// with TOKEN and SQLITE_FILENAME values
// Currently I'm using 
// SQLITE_FILENAME=\data\db.sqlite
// but this requires I manually create the data folder inside \build\
// when I run.  I could probably use help getting the whole build
// process and such organized cleaner
const dotenv = require('dotenv');
const FalcoClient = require('./client.js');
const { Intents } = require('discord.js');
dotenv.config();

const intents = new Intents();
intents.add(
  'GUILD_PRESENCES',
  'GUILD_MEMBERS',
  'GUILDS',
  'GUILD_VOICE_STATES',
  'GUILD_MESSAGES',
  'GUILD_MESSAGE_REACTIONS'
);
const client = new FalcoClient(process.env, { ws: { intents: intents } });

(() => {
  client.initialize();
  client.login(client.token);
})();
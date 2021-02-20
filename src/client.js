import Discord from 'discord.js';
import dbInit from './db/db.js';
import events from './events/events.js';

class FalcoClient extends Discord.Client {
    constructor(config, options = {}) {
        super(options);
        this.isDbInitialized = false;
        this.db = {};
        this.config = config;
        this.token = config.TOKEN;
        this.initDb();
    }

    async initDb() {
        this.db = await dbInit(this.config);
        this.isDbInitialized = true;
    }

    initialize() {
        this.loadEvents();
    }

    loadEvents() {
        for (const [key, value] of Object.entries(events)) {
            console.log('connecting event', value.eventName);
            super.on(value.eventName,value.handler.bind(null,this));
        }
    }
}

module.exports = FalcoClient;
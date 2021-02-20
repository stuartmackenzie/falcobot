export default {
    eventName: "ready",
    handler: async (client) => {
        client.user.setPresence({ status: 'online', activity: { name: 'commands', type: 'LISTENING' }});

        // Add in something to refresh guilds list / cache tables
    }
};
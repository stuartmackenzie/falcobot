export default {
    eventName: "guildDelete",
    handler: async (client, guild) => {
        await client.db.guilds.deleteGuild(guild.id);
        await client.db.roles.deleteGuild(guild.id);
        await client.db.users.deleteGuild(guild.id);
    }
};
export default {
    eventName: "guildCreate",
    handler: async (client, guild) => {
        await client.db.guilds.insert(guild.id, guild.name, guild.ownerID, '!');

        guild.roles.cache.forEach(async (role) => {
            await client.db.roles.insert(
                guild.id,
                role.id,
                role.name,
                role.permissions.bitfield,
                role.color,
                role.hoist,
                role.managed,
                role.mentionable,
                role.deleted
            );
        });
    }
};
export default {
    eventName: "roleCreate",
    handler: async (client, role) => {
        await client.db.roles.insert(
            role.guild.id,
            role.id,
            role.name,
            role.permissions.bitfield,
            role.color,
            role.hoist,
            role.managed,
            role.mentionable,
            role.deleted
        );

        // Log role creation?
    }
};
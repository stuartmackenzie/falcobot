export default {
    eventName: "roleUpdate",
    handler: async (client, oldRole, newRole) => {
        await client.db.roles.update(
            newRole.guild.id,
            newRole.id,
            newRole.name,
            newRole.permissions.bitfield,
            newRole.color,
            newRole.hoist,
            newRole.managed,
            newRole.mentionable,
            newRole.deleted
        );

        // Log role update?
    }
};
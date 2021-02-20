export default {
    eventName: "roleDelete",
    handler: async (client, role) => {
        await client.db.roles.delete(role.id);

        // Log role deletion?
    }
};
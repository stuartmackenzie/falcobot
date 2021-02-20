const guild = async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS guilds (
        guild_id TEXT PRIMARY KEY,
        name TEXT,
        ownerID TEXT,
        prefix TEXT DEFAULT "!" NOT NULL
      );
    `);
    return {
        insert: async(
                guild_id, 
                name, 
                ownerID, 
                prefix
            ) => await db.run(
                'INSERT OR IGNORE INTO guilds (guild_id, name, ownerID, prefix) VALUES (?, ?, ?, ?);', 
                guild_id, 
                name, 
                ownerID, 
                prefix
            ),

        selectRow: async(guild_id) => await db.get('SELECT * FROM guilds WHERE guild_id = ?;', guild_id),
        selectPrefix: async(guild_id) => await db.get('SELECT prefix FROM guilds WHERE guild_id = ?;', guild_id),

        updateName: async(guild_id, name) => await db.run('UPDATE guilds SET name = ? WHERE guild_id = ?;', name, guild_id),
        updatePrefix: async(guild_id, prefix) => await db.run('UPDATE guilds SET prefix = ? WHERE guild_id = ?;', prefix, guild_id),

        deleteGuild: async(guild_id) => await db.run('DELETE FROM guilds WHERE guild_id = ?;', guild_id)
    };
};

export default guild;
const user = async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        guild_id TEXT,
        user_id TEXT,
        user_name TEXT,
        user_discriminator TEXT,
        bot INTEGER,
        PRIMARY KEY (guild_id, user_id)
      );
    `);
    return {
        insert: async (guild_id, user_id, user_name, user_discriminator, bot) => await db.run(`
          INSERT OR IGNORE INTO users (
            guild_id, 
            user_id, 
            user_name,
            user_discriminator,
            bot
          ) VALUES (?, ?, ?, ?, ?);
        `, guild_id, user_id, user_name, user_discriminator, bot),

        selectRow: async (user_id, guild_id) => await db.get('SELECT * FROM users WHERE user_id = ? AND guild_id = ?;', user_id, guild_id),

        updateUser: async (user_id, user_name, user_discriminator) => await db.run('UPDATE users SET user_name = ?, user_discriminator = ? WHERE user_id = ?;', user_name, user_discriminator, user_id),

        deleteGuild: async (guild_id) => await db.run('DELETE FROM users WHERE guild_id = ?;', guild_id)
    }
};

export default user;
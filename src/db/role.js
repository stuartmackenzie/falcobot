const role = async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS roles (
        guild_id TEXT,
        role_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        permissions INTEGER,
        color INTEGER DEFAULT 0 NOT NULL,
        hoist INTEGER DEFAULT 0 NOT NULL,
        managed INTEGER DEFAULT 0 NOT NULL,
        mentionable INTEGER DEFAULT 0 NOT NULL,
        deleted INTEGER DEFAULT 0 NOT NULL
      );
    `);
    return {
        insert: async(
                guild_id, 
                role_id,
                name,
                permissions,
                color,
                hoist,
                managed,
                mentionable,
                deleted
            ) => await db.run(
                'INSERT OR IGNORE INTO roles (guild_id, role_id, name, permissions, color, hoist, managed, mentionable, deleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);', 
                guild_id, 
                role_id,
                name,
                permissions,
                color,
                hoist,
                managed,
                mentionable,
                deleted
            ),
        selectRow: async(role_id) => await db.get('SELECT * FROM roles WHERE role_id = ?;', role_id),

        update: async(
            guild_id, 
            role_id,
            name,
            permissions,
            color,
            hoist,
            managed,
            mentionable,
            deleted
        ) => await db.run(
            'UPDATE roles SET name = ?, permissions = ?, color = ?, hoist = ?, managed = ?, mentionable = ?, deleted = ? WHERE guild_id = ? AND role_id = ?;',
            name,
            permissions,
            color,
            hoist,
            managed,
            mentionable,
            deleted, 
            guild_id, 
            role_id
        ),

        delete: async(role_id) => await db.run('DELETE FROM roles WHERE role_id = ?;', role_id),
        deleteGuild: async(guild_id) => await db.run('DELETE FROM roles WHERE guild_id = ?;', guild_id)
    };
};

export default role;
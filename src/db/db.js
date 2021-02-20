import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import {default as guildDb} from './guild';
import {default as roleDb} from './role';
import {default as userDb} from './user';

sqlite3.verbose();

module.exports = (async (config) => {
    const filename = __basedir + config.SQLITE_FILENAME;

    const db = await open({
        filename: filename,
        driver: sqlite3.Database
    });

    const guilds = await guildDb(db);
    const roles = await roleDb(db);
    const users = await userDb(db);
    return {
        guilds,
        roles,
        users
    };
});
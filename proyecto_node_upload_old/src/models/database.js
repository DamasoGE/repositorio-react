import sqlite3 from 'sqlite3';

import { DATABASE_PATH } from '../config/config.js'

const db = new sqlite3.Database(DATABASE_PATH, (err)=>{
    if(err){
        console.error("Error al conectar con la base de datos", err.message)
    }else{
        console.log("Conexión exitosa a la base de datos");
    }
})

db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS file (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        size TEXT NOT NULL,
        path TEXT NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        bin INTEGER NOT NULL
        )`
    );
})

export default db;
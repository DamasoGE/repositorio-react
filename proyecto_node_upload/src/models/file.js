import db from "./database.js";

//ESTO ES SQLITE

export const createFile = (name,size,path,callback)=>{
    const sql = `INSERT INTO file (nombre, size, path) VALUES (?,?)`;
    const params = [name, size, path];
    db.run(sql, params,function(err){ //Cuando queres crear/actualizar utilizar RUN
        callback(err,{id:this.lastID});
    });
}

export const getAllFiles = (callback) =>{
    const sql = `SELECT * FROM file`;
    db.all(sql,[],function(err,rows){ //Cuando quieres afectar a muchas filas ALL
        callback(err,rows);
    })
}

export const getFileById = (id, callback) =>{
    const sql = `SELECT * FROM file WHERE id=?`;
    db.get(sql, id, function(err,row){ //Para hacer un GET de uno
        callback(err,row);
    })
}

export const deleteFileById = (id, callback) =>{
    const sql = `DELETE FROM file WHERE id=?`;
    db.run(sql, id, function(err){ //Para hacer un GET de uno
        callback(err,{changes:this.changes});
    })
}

export const updateFile = (id,name,callback) =>{
    const sql = `UPDATE file SET name=? WHERE id=?`;
    const params = [name, id];
    db.run(sql,params, function(err){
        callback(err,{changes: this.changes})
    })
}
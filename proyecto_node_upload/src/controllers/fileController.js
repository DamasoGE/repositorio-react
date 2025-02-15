import { getFileById, deleteFileById, updateFile, createFile, getAllFiles } from "../models/file.js"


export const getFileByIdHandler = (req,res) =>{
    const { id } = req.params;
    getFileById(id,(err,row)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else if(!row){
            res.status(404).json({error: "Archivo no encontrado"});
        }else{
            res.status(200).json(row);
        }
    })
}

export const getAllFileHandler = (req,res) =>{
    getAllFiles((err,rows)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.status(200).json(rows);
        }
    })
}

export const createFileHandler = (req,res)=>{
 const { name, size, path } = req.body;
 createFile(name, size, path, (err,result)=>{
    if(err){
        res.status(500).json({error: err.message});
    }else{
        res.status(201).json(result);
    }
 })
}

export const deleteFileHandler = (req,res)=>{
    const { id } = req.params;
    deleteFileById(id, (err,result)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else if(result.changes==0){
            res.status(404).json({error: "El archivo no se ha podido eliminar"});
        }else{
            res.status(200).json(result);
        }
    });
}

export const updateFileHandler = (req,res)=>{
    const { id } = req.params;
    updateFile(id, (err, result)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else if(result.changes==0){
            res.status(404).json({error: "No se ha podido actualizar el archivo"});
        }else{
            res.status(200).json(result);
        }
    })
}
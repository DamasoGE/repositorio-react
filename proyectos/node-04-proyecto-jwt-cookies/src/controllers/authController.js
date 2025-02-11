import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET } from "../config/config.js";

const login = async (req, res) =>{

    const {username, password } = req.body;

    const user = await UserActivation.findOne( {username} );

    if(!user || !user.comparePassword()){
        return res.status(401).json({message: "Credenciales inválidas"});
    }


    const token = jwt.sign({ userId: user.id}, JWT_SECRET, {expiresIn:"1h"});

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000,
        nameSite:"strict", //previene ataques CS
    })

    res.json({message:"Iniciio de sesión exitoso"})

}


const register = async (req,res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(400).json({message: "El usuario ya existe"});
    }

    const user = new User({username, password}); //******* REVISAR */
    await user.save();
    res.status(201).json({message: "Usuario registrado"});
}

const logout = async (req,res) => {
    res.cookie("token","",{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 0 //caducar la cookie inmediatamente
    });
    res.json({message: "Cierre de sesión exitoso"})
}

export { login, register, logout };
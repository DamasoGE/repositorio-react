import User from "../models/User.js"

const addUser = async (req, res) =>{
    try {
        const { username, password } = req.body;

        const user = new User({username, password});
        await user.save();
        res.status(201).json({message: "Usuario añadido"});
    } catch (error) {
        res.status(400).json({message: "Error al añadir usuario"})
        console.log("Error: ", error);
    }
}

//controlador para obtener el perfil del usuario identificado.

const getUserProfile = async (req, res) =>{
    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado"});
        }

        res.json({id: user._id, username: user.username});
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { addUser, getUserProfile };
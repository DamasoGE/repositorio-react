

//funcion par acontrolar de forma asincrona los middleware de autentificacion

//fn->funcion controladora
//retorna una funcion de tipo middleware
//Promise.resolve asegura que se resuelva la promesa.

const cathAsync = (fn) => (req,res,next) =>{
    Promise.resolve(fn(req,res,next)).catch(next);
}

//función para extraer los datos (email y password) del body de la petición
export const register = cathAsync(async(req,res)=>{
    //destructuring del body para sacar email y password
    const { email, password } = req.body;
    //validamos si el email y el password estan presentes
    await AuthService.register(email, password); //estará en la carpeta services
    //retornamos un mensaje de exito
    res.status(201).json({message: "Usuario registrado con éxito"});
})
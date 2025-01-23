

//funcion par acontrolar de forma asncrona los middleware de autentificacion

//fn->funcion controladora
//retorna una funcion de tipo middleware
//Promise.resolve asegura que se resuelva la promesa.

const cathAsync = (fn) => (req,res,next) =>{
    Promise.resolve(fn(req,res,next)).catch(next)
}
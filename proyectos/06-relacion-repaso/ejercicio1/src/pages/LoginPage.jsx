import { useState } from "react"

const initialState = {email:"", password:""};

const LoginPage = () => {

    const [formData, setFormData] = useState(initialState)

    const handlerSubmit = () =>{

    }

    const handlerChange = () =>{

    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-md w-full space-y-8">
            <h2 className="mt-6 text-center text-4xl font-bold text-gray-900">Iniciar Sesión</h2>
            <form className="mt-8 space-y-8" onSubmit={handlerSubmit}>
                <div>
                    <div>
                        ERROR...
                    </div>
                </div>
                    {/* ELEMENTOS DEL FORMULARIO */}
                <div>
                    <div className="rounded shadow-sm">
                        <label htmlFor="">Email</label>
                        <input 
                            className="relative"
                            id="email"
                            type="text"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handlerChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
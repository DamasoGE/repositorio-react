import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEvent } from "../context/EventContext";

const stateInitial = {
  name: "",
  date: "",
  type: "",
  valoracion: ""
};

const EventNewPage = () => {

  const [formData, setFormData] = useState(stateInitial);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { addEvent } = useEvent()



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const newresponse = await addEvent(formData);
      if(newresponse=="Error"){
        setError("Error al crear el evento")
        throw new Error ("Error en crear el evento")
      }else{
        navigate("/");
      }
    } catch (error) {
      console.log("Error al crear evento", error);
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crear nuevo Evento
          </h2>
        </div>
        <form 
          onSubmit={handleSubmit}
          className="mt-8 space-y-6">

              { error ? (
                  <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              ):(
                ""
              )}

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha
              </label>
              <input 
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </div>
            <div>
              <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selecciona Tipo
              </label>
              <select 
              name="type"
              value={formData.type}
              onChange={handleInputChange}  
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  
              >
              <option value="taller">Taller</option>
              <option value="conferencia">Conferencia</option>
              <option value="concierto">Concierto</option>

            </select>
  
            </div>

            <div>
              <label
                  htmlFor="valoracion"
                  className="block text-sm font-medium text-gray-700"
                >
                  Valoracion
              </label>
              <input 
                type="text"
                name="valoracion"
                value={formData.valoracion}
                onChange={handleInputChange}                  
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </div>

          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Crear nuevo Evento
            </button>
          </div>
        </form>
        <div>
          <Link to="/" className="text-purple-600">Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default EventNewPage
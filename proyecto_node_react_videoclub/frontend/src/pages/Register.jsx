import { useState } from "react";
import { Link } from "react-router-dom";

const api = import.meta.env.VITE_BACKEND_API;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameLowerCase = username.toLocaleLowerCase();
    try {
      const response = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameLowerCase, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Usuario registrado con éxito");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error al conectar con el servidor:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="min-w-xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Nombre de Usuario</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-700 text-white p-3 rounded-lg font-semibold hover:bg-rose-500 transition mb-5"
          >
            Registrarse
          </button>
        </form>
        <Link to="/login" className="text-blue-600">
        Volver a Inicio de Sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
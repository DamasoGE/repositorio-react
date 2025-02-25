import { useNavigate } from "react-router-dom";
import { useEvent } from "../context/EventContext";


const EventCard = ({ event }) => {

    const { deleteEvent } = useEvent();
    const navigate = useNavigate();

    const handleDelete = () =>{
        console.log(event);
        deleteEvent(event);
    }

    const handleEdit = () =>{
        navigate(`/event/edit/${event._id}`);
    }

  return (
    <div className="p-5 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
        <div className="w-full text-center text-xl font-semibold">
            {event.name}
        </div>

        <div className="w-full p-2 rounded-md shadow-md">
            📅{`${new Date(event.date).getDate()}/${new Date(event.date).getMonth()+1}/${new Date(event.date).getFullYear()}`}
        </div>

        <div className="w-full p-2 rounded-md shadow-md">
            🏷️{event.type}
        </div>

        <div className="w-full p-2 rounded-md shadow-md">
            ⭐{event.valoracion}
        </div>

        <div className="p-2">
            <button onClick={handleEdit} className="w-1/3 text-white px-4 py-2 mx-5 rounded-lg bg-amber-500 hover:bg-amber-700">Editar</button>
            <button onClick={handleDelete} className="w-1/3 text-white px-4 py-2 mx-5 rounded-lg bg-red-500 hover:bg-red-700">Eliminar</button>
        </div>
    </div>
  )
}

export default EventCard
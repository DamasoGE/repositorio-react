import { createContext, useContext, useState } from "react";

const EventContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

export const EventProvider = ({ children }) => {

const [isLoading, setIsLoading] = useState(true);
const [events, setEvents] = useState([]);

const fetchEvents = async () =>{
    try {
        const reponse = await fetch(`${API_URL}/api/events`);
        if (!reponse.ok) {
          throw new Error("No se ha podido obtener los datos");
        }
  
        const data = await reponse.json();
        setEvents(data);

      } catch (error) {
        console.log("Error fetching events", error);
      } finally {
        setIsLoading(false);
      }
}


const addEvent = async ({name, date, type, valoracion}) =>{

    try {
        const response = await fetch(`${API_URL}/api/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, date, type, valoracion }),
        });

        console.log(response);
        if (!response.ok) {
          throw new Error("No se ha podido crear el evento");
        }

        const event = await response.json();
        setEvents((prevCart) => [...prevCart, event]);

      } catch (error) {
        return "Error"
      }



}

const updateEvent = async ({ _id, name, date, type, valoracion }) =>{
  try {
    const response = await fetch(`${API_URL}/api/events/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, date, type, valoracion }),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error("No se ha podido actualizar el evento");
    }

    await fetchEvents();

  } catch (error) {
    return "Error"
  }
}

const deleteEvent = async ({ _id }) =>{
  try {
    const response = await fetch(`${API_URL}/api/events/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No se ha podido borrar el evento");
    }

    const eventsCopy = events.filter((event)=> event._id!=_id);
    setEvents(eventsCopy);

  } catch (error) {
    console.log("Error al crear el evento", error);
  }
}
    const value = {
        events,
        fetchEvents,
        addEvent,
        updateEvent,
        deleteEvent
      };

    return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor EventProvider");
  }
  return context;
};
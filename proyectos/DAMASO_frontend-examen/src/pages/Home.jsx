import { useEffect, useState } from "react";
import { useEvent } from "../context/EventContext";
import EventCard from "../components/EventCard";

const Home = () => {

  const { events, fetchEvents } = useEvent();
  const [formFilter, setFormFilter] = useState({})

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFilter((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleCleanFilters = (e)=>{
    e.preventDefault();
    setFormFilter({});
  }
  

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Lista de Eventos</h1>
      </div>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar por nombre
            </label>
            <input 
            type="text"
            name="name"
            value={formFilter.name}
            onChange={handleInputChange} 
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de evento
            </label>
            <select 
            type="text"
            name="type"
            value={formFilter.type}
            onChange={handleInputChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              <option value="">Todos</option>
              <option value="conferencia">Conferencia</option>
              <option value="concierto">Concierto</option>
              <option value="taller">Taller</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fecha
            </label>
            <input 
            type="date"
            name="date"
            value={formFilter.date}
            onChange={handleInputChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ordenar por fecha
            </label>
            <select 
            type="text"
            name="order"
            value={formFilter.order}
            onChange={handleInputChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              <option value="newest">Más reciente primero</option>
              <option value="oldest">Más antiguo primero</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={handleCleanFilters} className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Limpiar filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        { events
          .filter((event)=>{
            return formFilter.name==null ? event : event.name.includes(formFilter.name)
          })
          .filter((event)=>{

            return formFilter.type=="" || formFilter.type==null ? event: event.type==formFilter.type;
          })
          .filter((event)=>{
            const dateEvent = `${new Date(event.date).getFullYear()}-${new Date(event.date).getMonth()+1}-${new Date(event.date).getDate()}`
            const filterDate = `${new Date(formFilter.date).getFullYear()}-${new Date(formFilter.date).getMonth()+1}-${new Date(formFilter.date).getDate()}`
            return formFilter.date==null || isNaN(new Date(formFilter.date).getFullYear()) ? event : dateEvent==filterDate;
          })
          .sort((a,b)=>{
            if(formFilter.order=="newest" || formFilter.order==null){
              if(a.date > b.date){
                return -1;
              }
            }
            if(formFilter.order=="oldest"){ //NO FUNCIONA 
              if(a.date < b.date){
                return 1;
              }
            }
            return 0;
          })
          .map((event)=>
            <EventCard key={event._id} event={event}></EventCard>  
            )

        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
    </div>
  );
};

export default Home;

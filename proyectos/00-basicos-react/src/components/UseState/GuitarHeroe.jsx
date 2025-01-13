import { useState } from "react";

import CardGuitar from "./CardGuitar";

const initalGuitars = [
  {
    name: "stratocaster",
    price: 1200,
    type: "electric",
    image: "",
  },
  {
    name: "telecaster",
    price: 1100,
    type: "electric",
    image: "",
  },
  {
    name: "les paul",
    price: 1500,
    type: "acoustic",
    image: "",
  },
  {
    name: "sg",
    price: 1400,
    type: "electric",
    image: "",
  },
  {
    name: "flying v",
    price: 1300,
    type: "acoustic",
    image: "",
  },
  {
    name: "jazzmaster",
    price: 1250,
    type: "electric",
    image: "",
  },
  {
    name: "mustang",
    price: 1150,
    type: "acoustic",
    image: "",
  },
  {
    name: "explorer",
    price: 1350,
    type: "electric",
    image: "",
  },
  {
    name: "firebird",
    price: 1450,
    type: "electric",
    image: "",
  },
  {
    name: "jaguar",
    price: 1200,
    type: "clasic",
    image: "",
  },
];
const GuitarHeroe = () => {
  const [filterGuitars, setFilterGuitars] = useState(initalGuitars);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    // xxx aquí vendría la función que realiza la búsqueda
    findGuitars(value, filterType);
  };

  const handleChangeFilterType = (e) => {
    const value = e.target.value;
    setFilterType(value);
    // aquí tengo que filtrar por tipo de guitarra
    findGuitars(searchTerm, value);
  };

  const findGuitars = (search, type) => {
    const dataFiltered = initalGuitars.filter(
      (guitar) =>
        // guitar.name.toLowerCase().includes(search) && guitar.type.includes(type)
        guitar.name.toLowerCase().includes(search) &&
        (guitar.type === type || type === "")
    );

    setFilterGuitars(dataFiltered);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white mt-8 p-6 shadow-lg rounded-md">
      {/* Titulo */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Filtro de Guitarras
      </h1>
      {/* Formulario para buscar */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Buscar:</label>
        <input
          type="text"
          placeholder="Buscar guitarra"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {/* Select para filtrar por tipo de guitarra */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Filtrar por Tipo de Guitarra
        </label>
        <select
          value={filterType}
          onChange={handleChangeFilterType}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Todos</option>
          <option value="electric">Eléctricas</option>
          <option value="acoustic">Acústicas</option>
          <option value="clasic">Clásicas</option>
        </select>
      </div>

      {/* Lista de guitarras */}
      <div>
        {filterGuitars.map((guitar) => (
          // aquí tengo que renderizar una cardGuitar
          <CardGuitar  key={guitar.name} guitar={guitar}/>
        ))}
      </div>
    </div>
  );
};

export default GuitarHeroe;

import guitarsolid from "../../assets/guitar-solid.svg";
import PropTypes from "prop-types";

const CardGuitar = ({ guitar }) => {
  const { name, price, type } = guitar;
  return (
    <div
      key={name}
      className="bg-gray-100 border p-4 mt-4 rounded-lg shadow-md flex items-center"
    >
      <img
        src={guitarsolid}
        alt={name}
        width={80}
        className="w-20 h-20 object-cover rounded-md  ml-4 mr-10"
      />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-700">{type}</p>
        <p className="text-xl font-bold text-gray-700">{price} €</p>
      </div>
    </div>
  );
};

export default CardGuitar;

CardGuitar.propTypes = {
  guitar: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string
  })
};

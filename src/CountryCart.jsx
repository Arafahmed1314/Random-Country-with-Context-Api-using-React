import { Link, useNavigate } from "react-router-dom";

function CountryCart({ country, className }) {
  const navigate = useNavigate();
  const { flags, name, capital } = country;

  const handleData = (name) => {
    navigate(`/details/${name}`);
  };

  return (
    <div className={`border p-4 rounded-lg shadow-lg ${className}`}>
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className="w-24 h-16 mb-2"
      />
      <Link to={`/details/${name.common}`}>
        <h3 className="text-xl font-semibold mb-1">{name.common}</h3>
      </Link>

      <p className="text-gray-600">Capital: {capital ? capital[0] : "N/A"}</p>
      <button
        className="mt-3 bg-gray-800 text-white py-1 px-4 rounded-lg border-none outline-none"
        onClick={() => handleData(name.common)}
      >
        See Details
      </button>
    </div>
  );
}

export default CountryCart;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]); // Access the first country in the array
      });
  }, [countryName]);

  if (!country) {
    return <p>Loading...</p>;
  }

  const currency = country.currencies ? Object.values(country.currencies)[0].name : "N/A";

  return (
    <div className="border p-4 rounded-lg shadow-lg mb-2 flex justify-around">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="w-64 h-64 mb-2 rounded-full"
      />
      <div>
        <h3 className="text-2xl font-semibold mb-1">{country.name.common}</h3>

        <h3 className="text-gray-600 text-xl">
          Capital: {country.capital ? country.capital[0] : "N/A"}
        </h3>
        <h3 className="text-gray-600 text-xl font-semibold mb-1">
          Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
        </h3>
        <h3 className="text-gray-600 text-xl font-semibold mb-1">
          Population: {country.population}
        </h3>
        <h3 className="text-gray-600 text-xl font-semibold mb-1">
          Currency: {currency}
        </h3>
        <h3 className="text-gray-600 text-xl font-semibold mb-1">
          <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className=" ">
             Google Map: <span className="text-blue-700 underline">Click Here</span>
          </a>
        </h3>
        <p className="text-gray-600 text-xl font-semibold mb-1">Area: {country.area} S.km</p>
      </div>
    </div>
  );
}

export default ShowDetails;

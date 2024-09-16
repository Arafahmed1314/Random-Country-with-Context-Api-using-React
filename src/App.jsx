import { useContext, useEffect, useState } from "react";
import CountryCart from "./CountryCart";
import { SearchContext } from "./SearchContext"; // Corrected the typo

function App() {
  const [countries, setCountries] = useState([]);
  const { searchValue } = useContext(SearchContext); // Corrected typo in context import

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        if (data) setCountries(data.slice(0, 10)); // Load the first 10 countries initially
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <ul>
        {filteredCountries.map((item) => (
          <CountryCart key={item.cca3} country={item} className="mb-2" />
        ))}
      </ul>
    </div>
  );
}

export default App;

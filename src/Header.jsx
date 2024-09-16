import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './SearchContext'; // Corrected the typo in SearchContext

function Header() {
  const [inputValue, setInputValue] = useState("");
  const { setSearchValue } = useContext(SearchContext); // Corrected typo in context import

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", inputValue);
    setSearchValue(inputValue); // Updates searchValue in the context
    setInputValue(""); // Clears the input field
  };

  return (
    <header className="bg-gray-800 p-4">
      {/* Navbar */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Icon */}
        <div className="text-white text-xl font-bold">
          <span className="material-icons">menu</span>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4 flex justify-center">
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;

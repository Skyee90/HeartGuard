import { useState } from "react";
import { PixelSearchIcon } from "../pixel-art/PixelIcons";

const medicines = [
  "Paracetamol",
  "Aspirin",
  "Metformin",
  "Amlodipine",
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const medicine = medicines.find(
      (item) => item.toLowerCase() === query.trim().toLowerCase()
    );

    setResult(medicine || "Medicine not found in demo data.");
  };

  return (
    <div className="search-area">
      <div className="search-box">
        <span className="search-icon">
          <PixelSearchIcon />
        </span>

        <input
          type="text"
          placeholder="Search for a medicine (e.g. Paracetamol)"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {result && (
        <div className="demo-result">
          {result === "Medicine not found in demo data."
            ? result
            : `${result} found — side-effect information will appear here.`}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
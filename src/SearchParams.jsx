import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="loaction">
          Location
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;

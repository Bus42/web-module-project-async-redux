import React from "react";
import { BASE_URL } from "../constants";
import { useAxios } from "../hooks";

const Locations = () => {
  const { response, error } = useAxios({
    method: "get",
    url: BASE_URL.locations,
  });

  return (
    <div>
      <h2>Locations</h2>
      {response ? (
        response.results.map((location) => (
          <div className="location" key={location.id}>
            <h3>{location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            {/* add logic to get detail view of location */}
            {/* add logic to click on location.resident and get character detail view */}
          </div>
        ))
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
};

export default Locations;

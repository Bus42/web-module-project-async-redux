import React from "react";
import { BASE_URL } from "../constants";
import { useAxios } from "../hooks";

const Characters = () => {
  const { response, error } = useAxios({
    method: "get",
    url: BASE_URL.characters,
  });

  return (
    <div>
      <h2>Characters</h2>
      {response ? (
        response.results.map((character) => (
          <div className="character" key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>
              {character.species} {character.gender.toLowerCase()}{" "}
              {character.origin.name === "unknown"
                ? "of unknown origin"
                : `from ${character.origin.name}`}
            </p>
            {/* add logic to get detail view of character */}
            {/* add logic to click on character.origin.url and get location detail view */}
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

export default Characters;

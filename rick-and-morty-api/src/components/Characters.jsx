import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import { connect } from "react-redux";
import { fetchData } from "../actions";

const Characters = ({ response, error, loading }) => {

  useEffect(() => {
    fetchData(BASE_URL.characters);
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {response !== null ? (
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
          </div>
        ))
      ) : error !== null ? (
        <p>{error.message}</p>
      ) : loading ? (
        <p>...loading</p>
      ) : (
        <p>something ain't right</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    response: state.response,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchData })(Characters);

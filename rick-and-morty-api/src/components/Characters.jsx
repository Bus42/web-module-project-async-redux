import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import { connect } from "react-redux";
import { fetchData } from "../actions";

const Characters = ({ response, error, loading, fetchData }) => {
  useEffect(() => {
    setTimeout(() => {
      fetchData(BASE_URL.characters);
    }, 1500);
  }, [fetchData]);

  return (
    <div>
      <h2 className="center-align">Characters</h2>
      {response ? (
        <div className="row">
          {response.results.map((character) => (
            <div className="col s12 m6" key={character.id}>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{character.name}</span>
                  <div className="character">
                    <img src={character.image} alt={character.name} />
                    <p>
                      {character.species} {character.gender.toLowerCase()}{" "}
                      {character.origin.name === "unknown"
                        ? "of unknown origin"
                        : `from ${character.origin.name}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p>{error.message}</p>
      ) : loading ? (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      ) : (
        <p>something ain't right</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.response,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchData })(Characters);

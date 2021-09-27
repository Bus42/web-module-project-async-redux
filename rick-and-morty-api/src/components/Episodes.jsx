import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BASE_URL } from "../constants";
import { fetchData } from "../actions";

const Episodes = ({ response, error, loading, fetchData }) => {
  useEffect(() => {
    setTimeout(() => {
      fetchData(BASE_URL.episodes);
    }, 1500);
  }, [fetchData]);

  return (
    <div>
      <h2 className="center-align">Episodes</h2>
      {response ? (
        <ul className="collection">
        {response.results.map((episode) => (
          <li className="collection-item" key={episode.id}>
            <h3>{episode.name}</h3>
            <p>{episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
          </li>
        ))}
        </ul>
      ) : error ? (
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
  return {
    response: state.response,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchData })(Episodes);

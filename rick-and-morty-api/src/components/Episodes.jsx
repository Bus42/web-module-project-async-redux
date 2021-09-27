import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BASE_URL } from "../constants";
import { fetchData } from "../actions";

const Episodes = ({ response, error, loading, fetchData }) => {
  useEffect(() => {
    fetchData(BASE_URL.episodes);
  }, [fetchData]);

  return (
    <div>
      <h2>Episodes</h2>
      {response ? (
        response.results.map((episode) => (
          <div className="episode" key={episode.id}>
            <h3>{episode.name}</h3>
            <p>{episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
          </div>
        ))
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

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BASE_URL } from "../constants";
// import { useAxios } from "../hooks";
import { fetchData } from "../actions";

const Episodes = ({ response, error, loading }) => {
  // const { response, error } = useAxios({
  //   method: "get",
  //   url: BASE_URL.episodes,
  // });

  useEffect(() => {
    fetchData(BASE_URL.episodes);
  }, []);

  return (
    <div>
      <h2>Episodes</h2>
      {response ? (
        response.results.map((episode) => (
          <div className="episode" key={episode.id}>
            <h3>{episode.name}</h3>
            <p>{episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
            {/* add logic to get detail view of episode */}
            {/* add logic to click on character in episode.characters array and get character detail view */}
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

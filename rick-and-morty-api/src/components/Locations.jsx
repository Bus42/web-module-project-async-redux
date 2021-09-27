import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BASE_URL } from "../constants";
import { fetchData } from "../actions";

const Locations = ({ response, error, loading, fetchData }) => {
  useEffect(() => {
    fetchData(BASE_URL.locations);
  }, [fetchData]);

  return (
    <div>
      <h2>Locations</h2>
      {response ? (
        response.results.map((location) => (
          <div className="location" key={location.id}>
            <h3>{location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
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

export default connect(mapStateToProps, { fetchData })(Locations);

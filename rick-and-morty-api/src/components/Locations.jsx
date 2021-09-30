import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BASE_URL } from "../constants";
import { fetchData } from "../actions";

const Locations = ({ response, error, loading, fetchData }) => {
  useEffect(() => {
    setTimeout(() => {
      fetchData(BASE_URL.locations);
    }, 1500);
  }, [fetchData]);

  return (
    <div>
      <h2 className="center-align">Locations</h2>
      {response ? (
        <div className="row">
          <ul className="collection">
            {response.results.map((location) => (
              <li className="collection-item" key={location.id}>
                <h3>{location.name}</h3>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
              </li>
            ))}
          </ul>
        </div>
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

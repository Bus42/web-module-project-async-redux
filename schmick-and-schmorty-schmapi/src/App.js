import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import CharactersList from "./components/characters/CharactersList";
import LocationsList from "./components/locations/LocationsList";
import EpisodesList from "./components/episodes/EpisodesList";

import { BASE_URL, CHARACTERS, LOCATIONS } from "./constants";
import Loading from "./components/Loading";

function App(props) {
  const [loading, setLoading] = useState(true);
  const {currentTab} = props;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/${currentTab}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [currentTab]);

  return (
    <div className="App">
      {/* Header component */}
      {/*Dashboard component - renders conditionally */}
      {loading ? (
        <Loading />
      ) : currentTab === CHARACTERS ? (
        <CharactersList />
      ) : currentTab === LOCATIONS ? (
        <LocationsList />
      ) : (
        <EpisodesList />
      )}
      {/* Footer component */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { currentTab: state.currentTab };
};

export default connect(mapStateToProps, null)(App);

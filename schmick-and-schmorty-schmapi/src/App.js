import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import CharactersList from "./components/characters/CharactersList";
import LocationsList from "./components/locations/LocationsList";
import EpisodesList from "./components/episodes/EpisodesList";

import { CHARACTERS, LOCATIONS, EPISODES } from "./constants";
import NavBar from "./components/Navbar";

function App(props) {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={EPISODES}>
            <EpisodesList />
          </Route>
          <Route path={CHARACTERS}>
            <CharactersList />
          </Route>
          <Route path={LOCATIONS}>
            <LocationsList />
          </Route>
          <Route path="*">
            <Redirect to={EPISODES} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

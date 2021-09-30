import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Welcome from "./components/Welcome";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

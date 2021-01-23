import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Spells from "./spells/Spells";
import Items from "./items/Items";
import "rpg-awesome/css/rpg-awesome.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">
                <i className="ra ra-fairy-wand"></i> Spells
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/items">
                <i className="ra ra-round-bottom-flask"></i> Items
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Spells />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

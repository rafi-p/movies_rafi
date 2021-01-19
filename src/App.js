import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, MovieDetail } from "./pages/index";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <nav>
        <Link to="/">
          <h5>Movies</h5>
        </Link>
        <div className="link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://id.linkedin.com/in/rafi-panji"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rafi-p/movies_rafi"
          >
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;

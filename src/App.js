import { Route, Switch } from "react-router-dom";

import "./App.css";

import Users from "./components/Users";
import Comments from "./components/Comments";

import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Users />} />
        <Route
          exact
          path="/user/:id"
          render={(props) => <Profile {...props} />}
        />
        <Route
          exact
          path="/posts/:id"
          render={(props) => <Comments {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
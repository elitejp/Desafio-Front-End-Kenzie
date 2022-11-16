import { Route, Router, Switch, useHistory } from "react-router-dom";
import Anticipate from "../pages/Anticipate";
import Login from "../pages/Login";

function Routes() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/anticipate">
          <Anticipate />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./componets/Home";

/* Modify the value of the basename field with the value of your path.
The path must be the same as in your micro frontend root.
Example root:
registerApplication({
    name: "@collabra-mf/mf-template",
    app: loadImageTeste,
    activeWhen: ["/template"],
  }); */

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router basename="/template" history={history}>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};
export default App;

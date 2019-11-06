import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Welkome } from "./pages/Welkome";
import { About } from "./pages/About";
import { Info } from "./pages/Info";
import AppLayout from "./AppLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={Welkome} />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;

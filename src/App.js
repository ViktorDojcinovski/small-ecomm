import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import ItemsList from "./components/ItemsList.component";
import SingleItem from "./components/SingleItem.component";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={ItemsList} />
        <Route path="/item/:id" component={SingleItem} />
      </Switch>
    </>
  );
}

export default App;

import React, { Fragment } from "react";
import './App.css';

//components

import InputCars from "./components/InputCars";
import ListCars from "./components/ListCars";

function App() {
  return (
    <Fragment>
      <div className = "container">
        <InputCars/>
        <ListCars/>
      </div>
    </Fragment>
  );
}

export default App;

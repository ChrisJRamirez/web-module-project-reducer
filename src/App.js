import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { initialState } from "./reducers/index";
import reducer from "./reducers/index";

import { applyNumber, CHANGE_OPERATION } from './actions/index';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const numberHandler = (number) => {
    console.log(number)
    dispatch(applyNumber(number))
  };


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => numberHandler(1)} value={1} />
              <CalcButton onClick={() => numberHandler(2)} value={2} />
              <CalcButton onClick={() => numberHandler(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => numberHandler(4)} value={4} />
              <CalcButton onClick={() => numberHandler(5)} value={5} />
              <CalcButton onClick={() => numberHandler(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => numberHandler(7)} value={7} />
              <CalcButton onClick={() => numberHandler(8)} value={8} />
              <CalcButton onClick={() => numberHandler(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton value={"+"} />
              <CalcButton value={"*"} />
              <CalcButton value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

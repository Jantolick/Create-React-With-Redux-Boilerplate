import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./js/redux_store";
import "./App.css";
import Example from './js/components/Example';

function App() {
  return (
    <Provider store={store}>
      <BasicAppStart />
      <Example />
    </Provider>
  );
}

const BasicAppStart = () => (
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
)

export default App;

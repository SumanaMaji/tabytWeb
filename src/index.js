import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import TabExample from "./components/Tab";
import Alert from "./components/Alert";

// styles
import "./Tab.css";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <Tab></Tab> */}
    <TabExample></TabExample>
    <Alert></Alert>
  </BrowserRouter>,
  document.getElementById("root")
);
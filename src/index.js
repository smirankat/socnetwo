import * as serviceWorker from "./serviceWorker";
// import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import SocnetwoApp from "./App";

// let rerenderEntireTree = () => {
  ReactDOM.render(
    <SocnetwoApp />
   , document.getElementById("root")
  );
// };

// rerenderEntireTree();

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// } );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
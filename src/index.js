
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import withStore from './redux/withStore';
import App from "./components";

import connectToChatServer from "./chatServer/connectToChatServer";
const chatServer = connectToChatServer({
  address: "https://spotim-demo-chat-server.herokuapp.com"
});

const AppWithStore = withStore(App, {
  chatServer
});

ReactDOM.render(
  <AppWithStore />,
  document.getElementById("root")
);

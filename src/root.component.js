import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/store";

export default function Root(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

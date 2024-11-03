import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if you are in development call mount
if (process.env.NODE_ENV === "development") {
  const rootEl = document.getElementById("root");

  if (rootEl) {
    mount(rootEl);
  }
}else{
  const rootEl = document.getElementById("root");

  if (rootEl) {
    mount(rootEl);
  }
}

// export mount to used through container
export { mount };

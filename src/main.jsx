import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { VechaiProvider } from "@vechaiui/react";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "./configs/themes";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VechaiProvider theme={lightTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </VechaiProvider>
);

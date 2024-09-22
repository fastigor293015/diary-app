import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/globals.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@store";
import { ImagesModalProvider } from "@providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ImagesModalProvider>
        <App />
      </ImagesModalProvider>
    </Provider>
  </React.StrictMode>
);

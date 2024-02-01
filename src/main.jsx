import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Configs from "./components/sidePages/Configs.jsx";
import SingleConfig from "./components/sidePages/SingleConfig.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <Provider store={store}>
        <Routes>
        <Route index element={<App/>}/>
        <Route path="/configs" element={<Configs/>}/>
        <Route path="/singleConfig" element={<SingleConfig/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

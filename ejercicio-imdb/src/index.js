import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upcomings from "./views/Upcomings";
import Info from "./views/Info";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Upcomings />} />
        <Route path="film/:filmId" element={<Info />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

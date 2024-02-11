import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicNavBar from "./components/BasicNavBar";
import WhyHomes from "./pages/WhyHomes";
import HowItWorks from "./pages/HowItWorks";
import Blogs from "./pages/Blogs";
import { Toaster } from "react-hot-toast";
import GetStarted from "./pages/GetStarted";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <BasicNavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/why-homes" element={<WhyHomes />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import { Route, Routes } from "react-router-dom";
import Clients from "./components/Clients.jsx";
import Orders from "./components/Order.jsx";
import Home from "./pages/Home";
import ClientDetails from "./pages/ClientDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/client/:id" element={<ClientDetails/>}/>
    </Routes>
  );
}

import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import DetailedInfo from "../Contact/DetailedInfo";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import About from "../About/About";
import NavBar from "../App/NavBar";

const App = () => {
  const { charinfo } = useParams();
  const [data, setData] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/Service" element={<Service />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route
          exact
          path="/about/:charinfo/:id"
          element={<DetailedInfo />}
        ></Route>
      </Routes>
    </>
  );
};
export default App;

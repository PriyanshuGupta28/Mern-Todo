import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Navbar from "../Navbar/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;

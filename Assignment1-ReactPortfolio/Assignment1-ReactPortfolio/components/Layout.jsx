/*
  File name: Layout.jsx
  Student's Name: Yuen Chi Tse
  StudentID: 301333561
  Date: 01/28/2024
*/
import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png";
export default function Layout() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "120px", height: "120px", marginRight: "20px" }}
        />{" "}
        {/* Adjust width, height, and marginRight as needed */}
        <h1>My Portfolio</h1>
      </div>
      {/* <h1>My Portfolio</h1>
      <img src={logo} alt="logo" style={{ width: "100px" }} /> */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/service">Service</Link>|<Link to="/project">Project</Link>|{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
    </>
  );
}

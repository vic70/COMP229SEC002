/*
  File name: service.css
  Student's Name: Yuen Chi Tse
  StudentID: 301333561
  Date: 01/28/2024
*/
import React from "react";
import ProgrammingImage from "./images/Programming.jpg";
import AIImage from "./images/AI.webp";
import WebImage from "./images/WebDevelopment.jpg";
import AndroidImage from "./images/AndroidDeveloper.png";

export default function Services() {
  return (
    <>
      <h1 className="page-header">Srevices Offer</h1>
      <div className="grid-container">
        <div className="grid-item">
          <h2>General programming</h2>
          <img
            src={ProgrammingImage}
            alt="Programming"
            style={{ width: "300px" }}
          />
        </div>
        <div className="grid-item">
          <h2>
            Data Analysis and <br /> Mahcine Learning application
          </h2>
          <img src={AIImage} alt="AI" style={{ width: "300px" }} />
        </div>
        <div className="grid-item">
          <h2>Web development</h2>
          <img
            src={WebImage}
            alt="Web Development"
            style={{ width: "300px" }}
          />
        </div>
        <div className="grid-item">
          <h2>Mobile App development</h2>
          <img
            src={AndroidImage}
            alt="Adnroid App Development"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </>
  );
}

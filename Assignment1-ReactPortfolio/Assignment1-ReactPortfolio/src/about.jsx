/*
  File name: about.jsx
  Student's Name: Yuen Chi Tse
  StudentID: 301333561
  Date: 01/28/2024
*/

import React from "react";
import MyPhoto from "./images/MyPhoto.jpg";
export default function About() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="page-header">About Me</h1>
        <img
          src={MyPhoto}
          alt="MyPhoto"
          style={{ height: "300px", width: "auto" }}
        />
        <p style={{ padding: "0 10em", lineHeight: "1.6", fontSize: "18px" }}>
          I am an enthusiastic and skilled professional with over 10 years of
          experience in the semiconductor industry, now diving deeper into
          Software Engineering Technology and Artificial Intelligence at the
          University of York. My expertise spans Python, Oracle SQL, and web
          development, complemented by a strong ability to apply AI and Machine
          Learning to complex data analysis. Proficient in software architecture
          and object-oriented programming with C# and Java, I excel in leading
          projects to innovate and enhance product performance, achieving
          outstanding results and customer satisfaction.
        </p>
        <a
          href="https://drive.google.com/file/d/1pjslGt71KRCTK4sSQzINt-4TYe8RaVXG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "18px" }}
        >
          📰 View my resume 📰
        </a>
      </div>
    </>
  );
}

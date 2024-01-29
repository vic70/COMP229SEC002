/*
  File name: Home.jsx
  Student's Name: Yuen Chi Tse
  StudentID: 301333561
  Date: 01/28/2024
*/

import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>
        <h1 className="page-header">Welcome to Victor Tse's home page</h1>
        <p>
          Hi, I'm Victor Tse, a software developer with a passion for creating
          innovative and efficient solutions. I'm excited to share my work and
          journey with you.
        </p>
        <h2>Explore my porfolio</h2>
        <ul>
          <li>
            <Link to="/about">Learn more about Me</Link>
          </li>
          <li>
            <Link to="/service">Check out my services</Link>
          </li>
          <li>
            <Link to="/project">See the projects I've worked on</Link>
          </li>
          <li>
            <Link to="/contact">Get in touch with me</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

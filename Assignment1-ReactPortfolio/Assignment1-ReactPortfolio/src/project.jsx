/*
  File name: project.jsx
  Student's Name: Yuen Chi Tse
  StudentID: 301333561
  Date: 01/28/2024
*/
import React from "react";
import Project1Image from "./images/project1.png";
import Project2Image from "./images/project2.png";
import Project3Image from "./images/project3.png";

export default function Project() {
  return (
    <>
      <div>
        <h1 className="page-header">Project</h1>
        <nav>
          <a href="#project1">Project 1</a>|<a href="#project2">Project 2</a> |
          <a href="#project3">Project 3</a>
        </nav>

        <div id="project1">
          <h2>Project 1</h2>
          <img
            src={Project1Image}
            alt="Project 1"
            style={{ paddingLeft: "100px" }}
          />
          <p>
            <strong>Role:</strong> Data Analysis Application Developer
            <br />
            <strong>Outcome:</strong> Developed a{" "}
            <em>
              <strong style={{ color: "blue" }}>Python </strong>
            </em>
            application for direct data retrieval from{" "}
            <em>
              <strong style={{ color: "blue" }}>MongoDB </strong>
            </em>
            enabling real-time data filtering, visualization, and providing data
            summaries. Implemented local data caching mechanisms for faster
            subsequent data retrieval.
          </p>
        </div>
        <hr />
        <div id="project2">
          <h2>Project 2</h2>
          <img src={Project2Image} alt="Project 2" />
          <p>
            <strong>Role:</strong> Project Management <br />
            <strong>Outcome:</strong> Led the creation of a{" "}
            <em>
              <strong style={{ color: "blue" }}>C# </strong>
            </em>
            application for a restaurant ordering system, featuring create,
            read, and write capabilities. Managed the project from use case
            development, task delegation, and Gantt chart planning to code
            integration, testing, and final presentation.
          </p>
        </div>
        <hr />
        <div id="project3">
          <h2>Project 3</h2>
          <img
            src={Project3Image}
            alt="Project 3"
            style={{ paddingLeft: "100px" }}
          />
          <p>
            <strong>Role:</strong> Java Application Developer <br />
            <strong>Outcome:</strong>{" "}
            <em>
              <strong style={{ color: "blue" }}>Java </strong>
            </em>
            application capable of drawing polygons with any number of sides,
            complete with comprehensive error handling.
          </p>
        </div>
      </div>
    </>
  );
}

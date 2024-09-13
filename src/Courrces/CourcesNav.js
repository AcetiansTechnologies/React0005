import React from "react";
import Navbar from "../Courrces/Navbar";
import StayInformed from "./StayInformed";
import TeamTran from "./TeamTran";
import Catlog from "./Catlog";

const CourcesNav = () => {
  return (
    <div>
      <header className="Cource-Header"></header>
      <Navbar />
      <section>
      
          <div className="course-container">
            <h1 className="course-title">About this Course</h1>
            <p className="course-description">
              This is the fifth course in the Learn OpenUSD: Foundations
              curriculum, where we’re talking about model kinds. In this course,{" "}
              <strong>Understanding Model Kinds</strong>, we’ll explore the
              types of model kinds, and how they can be used to create an
              efficient model hierarchy in OpenUSD.
            </p>
            <p className="course-description">
              This course is designed for both beginners and those with some
              experience in 3D graphics and OpenUSD, providing you with the
              knowledge and skills to effectively use OpenUSD in your projects.
              We encourage you to actively participate in the activities and
              quizzes to enhance your learning experience.
            </p>

            <h2 className="learning-objectives-title">Learning Objectives</h2>
            <ul className="learning-objectives-list">
              <li>Differentiate between model kinds</li>
              <li>Structure a hierarchy with model kinds</li>
              <li>Use Python to get and set model kinds in OpenUSD</li>
            </ul>

            <h2 className="topics-covered-title">Topics Covered</h2>
            <p className="topics-covered-description">OpenUSD</p>

            <h2 className="course-outline-title">Course Outline</h2>
            <p className="course-outline-description">
              This course contains one module: Introducing Model Kinds
            </p>
          </div>
          <div className="details-container">
            <h1 className="details-title">Course Details</h1>

            <ul className="details-list">
              <li>
                <strong>Duration:</strong> 00:15
              </li>
              <li>
                <strong>Price:</strong> Free
              </li>
              <li>
                <strong>Level:</strong> Business/Executive
              </li>
              <li>
                <strong>Subject:</strong> Graphics and Simulation
              </li>
              <li>
                <strong>Language:</strong> English
              </li>
            </ul>

            <h2 className="prerequisites-title">Course Prerequisites</h2>
            <p className="prerequisites-description">
              An understanding of fundamental programming concepts in Python 3
              such as functions, loops, dictionaries and arrays, and Python 3
              related libraries.
            </p>

            <h2 className="instructor-title">
              Prefer learning from an instructor?
            </h2>
            <p className="instructor-description">
              Request a private workshop or view our public workshop schedule.
            </p>
          </div>
      
      </section>
      <StayInformed/>
      <TeamTran/>
      <Catlog/>
    </div>
  );
};

export default CourcesNav;

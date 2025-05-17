// import React from 'react'
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import Backend from "../../assets/Backend.png";
import ML from "../../assets/ML.jpg";
import Database from "../../assets/DataBase.png";
const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I have a strong foundation in front-end and back-end technologies,
          including HTML, CSS, JavaScript, and React for building dynamic user
          interfaces. On the backend, I work with Node.js and Express.js to
          develop robust server-side applications. My experience extends to
          databases such as SQL and MongoDB for efficient data management.
          Additionally, I have a keen interest in machine learning, leveraging
          tools like TensorFlow and Scikit-Learn to develop intelligent
          solutions.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Frontend Development </h2>
              <p>
                I have experience in front-end development using HTML, CSS,
                JavaScript, and React to build responsive and user-friendly web
                applications
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Backend} alt="Backend" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Backend Development</h2>
              <p>
                I have experience in backend development using Node.js and
                Express.js to build scalable and efficient server-side
                applications.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={ML} alt="ML" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Machine Learning</h2>
              <p>
                I have a basic understanding of machine learning concepts and
                have worked with tools like TensorFlow and Scikit-Learn to build
                simple models.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Database} alt="Database" className="skillBarImg" />
            <div className="skillBarText">
              <h2>DataBases</h2>
              <p>
                I have worked with databases like MongoDB and MySQL and have a
                good understanding of DBMS concepts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

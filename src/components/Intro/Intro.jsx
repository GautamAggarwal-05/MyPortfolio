// import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import btnimg from "../../assets/hireme.png";
import { motion } from "framer-motion";
import badge from "../../assets/leetcodeBadge.png"; // NEW import
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const Intro = () => {
  return (
    <div>
      <section id="intro" className="intro">
        {/* Left Content with Sequenced Motion */}
        <motion.div
          className="introContent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* "Hello," appears first */}
          <motion.span
            className="hello"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hello,
          </motion.span>
          {/* "I'm Gautam" appears next */}
          <motion.span
            className="introText"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            I'm <span className="introName">Gautam</span>
          </motion.span>
          {/* "Welcome to my portfolio" appears after */}
          <motion.span
            className="introText"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Welcome To My Personal Portfolio
          </motion.span>
          {/* Paragraph appears */}
          <motion.p
            className="introPara"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            I'm Gautam Aggarwal, a pre-final year B.Tech CSE student passionate
            about web development and machine learning, dedicated to creating
            impactful solutions and growing as a software engineer.
          </motion.p>
          {/* Button appears */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <a
              href= {'https://drive.google.com/file/d/1fG_iOAWbiykmkWTwp6YO1FX51iG7ffUC/view?usp=drive_link'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                {/* <img src={btnimg} alt="Hire Me" className="btnImg" /> */}
                <PiSuitcaseSimpleBold className="btnImg"/>
                Hire Me
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Smooth Motion */}
       <div className="bgContainer">
          <motion.div
            className="badgeWrapper"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          >
            <img src={badge} alt="LeetCode Knight Badge" className="badge" />
          </motion.div>
          <p className="badgeQuote">
            "Sharpening algorithms daily, one challenge at a time"
          </p>
        </div>

      </section>
    </div>
  );
};

export default Intro;

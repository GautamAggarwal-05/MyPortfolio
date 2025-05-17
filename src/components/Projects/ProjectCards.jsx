import React from "react";
import styles from "../Projects/Project.module.css";

const images = import.meta.glob('../../assets/*', { eager: true });

const ProjectCard = ({
  project: { title, imageSrc, description, skills, Livedemo, source,showDemo },
}) => {

  const getImage = (imgName) => {
    const imagePath = `../../assets/${imgName}`;
    return images[imagePath]?.default || images[`../../assets/default.png`].default;
  };

  return (
    <div className={styles.container}>
      <img src={getImage(imageSrc)} alt="ProjectImage" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.skills}>Skills used: <span className={styles.skill}>{skills}</span></span>
      <div className={styles.links1}>
        {showDemo ? (
            <a href={source}  className={styles.link1} style={{ margin: "auto", textAlign: "center", marginTop:"1.3vh"}} target="_blank" rel="noopener noreferrer">Ongoing...</a>
          ) : (
          <>
            <a href={Livedemo} className={styles.link1} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={source} className={styles.link1} target="_blank" rel="noopener noreferrer">Source</a>
          </>
)}

      </div>
    </div>
  );
};

export default ProjectCard;

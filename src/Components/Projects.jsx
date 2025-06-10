import React from "react";

const Project = ({ image, title, content }) => {
  return (
    <div className="project-card">
      <img src={image}></img>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="Projects" id="projects">
      <Project
        image={"images/AITS.png"}
        title={"Academic Issue Tracking System"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."
        }
      />
      <Project
        image={"images/Limo.jpg"}
        title={"Limo"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."
        }
      />
      <Project
        image={"images/Dashbolt.jpg"}
        title={"DashBolt"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."
        }
      />
      <Project
        image={"images/Bullet.jpeg"}
        title={"2D Royale"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."
        }
      />
    </section>
  );
};

export default Projects;

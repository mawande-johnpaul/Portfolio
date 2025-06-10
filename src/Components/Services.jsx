import React from "react";

const ServiceCard = ({image, title, content}) => {
  return (
    <div className="service-card">
      <img src={image}></img>
      <h3>{title}</h3>
      <p>
        {content}
      </p>
    </div>
  )
}

const Services = () => {

    return (
      <section className="Services" id="services">
        <ServiceCard image={"images/web.svg"} title={"Web Services"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."}/>
        <ServiceCard image={"images/web.svg"} title={"Web Services"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."}/>
        <ServiceCard image={"images/web.svg"} title={"Web Services"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."}/>
        <ServiceCard image={"images/web.svg"} title={"Web Services"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in."}/>
      </section>
    );
  }

export default Services;

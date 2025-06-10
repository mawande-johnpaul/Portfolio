import React from "react";

const Reason = ({image, content}) => {
  return(
    <div className="reason">
      <img src={image}></img>
      <p>{content}</p>
    </div>
  )
}

const Reasons = () => {

    return (
      <section className="Reasons" id="reasons">
        <div className="reasons-pane">
          <Reason image={'images/web.svg'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates"}/>
          <Reason image={'images/web.svg'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates"}/>
        </div>
        <div className="reasons-pane">
          <Reason image={'images/web.svg'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates"}/>
          <Reason image={'images/web.svg'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates"}/>
        </div>
      </section>
    );
  }

export default Reasons;

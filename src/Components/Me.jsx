import React from "react";

const Me = () => {

    return (
      <section className="Me" id="me">
        <div className="Me-left">
          <img src="images/profile.jpeg"></img>
        </div>
        <div className="Me-right">
            <div className="About">
              <h3>Mawande JohnPaul</h3>
              <h1>COMPUTER SCIENTIST</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi, temporibus ratione error quidem cum necessitatibus eaque voluptates, veritatis rem cumque dolorem quibusdam beatae in.</p>
            </div>
            <div className="Contacts">
              <div>
                <h2>Contacts</h2>
                <p>+256 787138130 (Whatsapp)</p>
                <p>+256 747460707</p>
                <p>mawandejohnpaul130@gmail.com</p>              
              </div>
              <div>
                <h2>Locations</h2>
                <p>Ntinda - Kampala, Uganda</p>
                <p>Makerere - Kampala, Uganda</p>
              </div>
            </div>
        </div>
      </section>
    );
  }

export default Me;

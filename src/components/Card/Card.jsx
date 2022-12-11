import React from "react";
import './Card.css'

import responseve from "../../images/dispositivos.png";
import trophy from "../../images/trophy.png";
import data from "../../images/bar-chart.png";

const Card = () => {
  return (
    <section className="cardContainer">
      <div className="cardContent">
        <img className="iconeCard" src={responseve} alt="dispositivos" />
        <div className="contentText">
          <h2 className="tituloCard">Responsive Design</h2>
          <p className="descCard">
            Duis oute irure dolor in reprehendent in valuptate velit esse clium
            dolore
          </p>
        </div>
      </div>

      <div className="cardContent">
        <img className="iconeCard" src={trophy} alt="trofeu" />
        <div className="contentText">
          <h2 className="tituloCard">Visual Page Builder</h2>
          <p className="descCard">
            Duis oute irure dolor in reprehendent in valuptate velit esse clium
            dolore
          </p>
        </div>
      </div>

      <div className="cardContent">
        <img className="iconeCard" src={data} alt="dados" />
        <div className="contentText">
          <h2 className="tituloCard">Stronng Admin Panel</h2>
          <p className="descCard">
            Duis oute irure dolor in reprehendent in valuptate velit esse clium
            dolore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;

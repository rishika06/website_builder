import React from "react";
import "./card.style.css";

type CardProps = {
  heading: string;
  desc: string;
  onWireframeClick: () => void;
  onSampleClick: () => void;
  disable: boolean;
};

function Card({
  heading,
  desc,
  onWireframeClick,
  onSampleClick,
  disable,
}: CardProps) {
  return (
    <div className="card__container">
      <h3 className="card__heading">{heading}</h3>
      <p className="card__desc">{desc}</p>
      <div className="card__btn-wrapper">
        <button className="card__btn-primary" onClick={onWireframeClick}>
          Wireframe
        </button>
        <button className="card__btn-secondary" onClick={onSampleClick}>
          Sample Website
        </button>
      </div>
    </div>
  );
}

export default Card;

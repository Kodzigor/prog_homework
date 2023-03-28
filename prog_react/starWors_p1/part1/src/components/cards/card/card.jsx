import React from "react";
import "./card.css";
import CardTitle from "../card-title/card-title";
import CardBody from "../card-body/card-body";

const Card = ({ list }) => {
  return (
    <div className="card">
      <CardTitle title={list.name}></CardTitle>
      <CardBody elemnts={list}></CardBody>
    </div>
  );
};

export default Card;

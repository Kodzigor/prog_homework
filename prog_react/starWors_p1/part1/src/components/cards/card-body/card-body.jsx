import React from "react";
import "./card-body.css";

const CardBody = ({ elemnts }) => {
  let {
    height,
    mass,
    skin_color,
    hair_color,
    eye_color,
    birth_year,
    gender,
    url,
  } = elemnts;
  return (
    <div className="card-body">
      <span>{`height: ${height}`}</span>
      <span>{`mass: ${mass}`}</span>
      <span>{`skin_color: ${skin_color}`}</span>
      <span>{`hair_color: ${hair_color}`}</span>
      <span>{`eye_color: ${eye_color}`}</span>
      <span>{`birth_year: ${birth_year}`}</span>
      <span>{`gender: ${gender}`}</span>
      <a href="`${url}`" target={"_blank"}>{`url: ${url}`}</a>
    </div>
  );
};
export default CardBody;

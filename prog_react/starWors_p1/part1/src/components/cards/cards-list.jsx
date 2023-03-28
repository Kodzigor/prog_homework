import React from "react";
import "./cards-list.css";
import Card from "./card/card";
import data from "../../data/data";

const CardsList = () => {
  return (
    <div className="cards-list">
      {data.map((el) => {
        return <Card list={el}></Card>;
      })}
    </div>
  );
};
export default CardsList;

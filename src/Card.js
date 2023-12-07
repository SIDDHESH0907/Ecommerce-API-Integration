import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.images[0]} />
        </div>
        <div className="info">
          <div>
            <b>Title:</b> {props.title}
          </div>
          <div></div>
          <div>
            <b>Price:</b> ₹ {props.price}
          </div>
          <div>
            <b>Category:</b> {props.category.name}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Card;

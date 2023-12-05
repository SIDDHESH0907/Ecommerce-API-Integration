import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.images} />
        </div>
        <div className="info">
          <div>
            <b>Title:</b> {props.title}
          </div>
          <div>
            {/* <b>Description:</b> {props.description} */}
          </div>
          <div>
            <b>Price:</b> {props.price}
          </div>
          <div>
            <b>Brand:</b> {props.brand}
          </div>
          <div>
            <b>Category:</b> {props.category}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

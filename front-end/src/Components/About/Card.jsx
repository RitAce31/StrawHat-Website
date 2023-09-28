import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

const Card = (props) => {
  const fillBountyData = () => {
    props.func();
  };
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <div className="card cards mx-auto">
          <NavLink exact to={`${props.name}/${props.id}`}>
            <img
              className="card-img-top"
              src={props.imgSrc}
              alt="Card image cap"
            />
          </NavLink>
        </div>
        <div className="card-body"></div>
      </div>
    </>
  );
};
export default Card;

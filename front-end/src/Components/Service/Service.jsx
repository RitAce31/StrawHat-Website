import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import CommonService from "./CommonService";
import Merry from "../images/Merry.png";
import Sunny from "../images/Sunny.png";

const Ships = (props) => {
  const navigate = useNavigate();
  const Ships = [
    {
      names: "Going Merry",
      img: Merry,
      msg: "Previous Ship",
    },
    {
      names: "Thousand Sunny",
      img: Sunny,
      msg: "Current Ship",
    },
  ];
  return (
    <>
      {Ships.map((i, index) => {
        return <CommonService ship={i.names} imgSrc={i.img} msg={i.msg} />;
      })}
    </>
  );
};
export default Ships;

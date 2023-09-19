import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { delBountyData, delPirate } from "../Services/PirateService";

const Common = (props) => {
  const onCharDel = (e) => {
    const confirmBox = window.confirm("Do you really want to kick crewmate?");
    if (confirmBox == true) {
      delPirate(e.target.id)
        .then((res) => {
          let temp = JSON.parse(res.data);
          if (temp.CODE == 200) {
            props.onDelete();
          }
        })
        .catch((ex) => console.log(ex));
    }
  };
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <br />
                    <strong className="brand-name">{props.goal}</strong>
                  </h1>
                  <h2 className="my-3">{props.position}</h2>
                  <div className="mt-3">
                    <NavLink
                      href=""
                      className="btn-get-started"
                      exact
                      to={`/about/${props.name}/${props.id}`}
                    >
                      Know More
                    </NavLink>
                    {props.id == 0 ? null : (
                      <button
                        className="delBtn btn-get-started ms-3 "
                        id={props.id}
                        onClick={onCharDel}
                      >
                        Kick Crewmate
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} className="img-fluid animated size" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;

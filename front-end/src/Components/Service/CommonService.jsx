import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CommonService = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.msg}
                    <br />
                    <strong className="brand-name">{props.ship}</strong>
                  </h1>
                  <div className="mt-3">
                    <button
                      className="btn-get-started"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Go back
                    </button>
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

export default CommonService;

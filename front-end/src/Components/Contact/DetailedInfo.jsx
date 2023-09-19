import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import "../style.css";
import { getPirateDetail } from "../Services/PirateService";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const DetailedInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const fillDetail = () => {
    getPirateDetail(id)
      .then((res) => {
        if (res.status == 204) {
          alert("data is not available");
          navigate("/");
        }
        console.log(res);
        console.log(res.data);
        setData(res.data);
      })
      .catch((ex) => console.log(ex));
  };

  useEffect(() => {
    fillDetail();
  }, []);

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="main_div d-flex">
                  <img src={data.char_img} className="char_img" />
                  <span className="char_span">
                    <h2 className="char_info ">
                      <strong>Bounty = {data.char_bounty}</strong>
                    </h2>
                    <h2>
                      <strong className="char_info">
                        Devil Fruit = {data.char_fruitname}
                      </strong>
                    </h2>
                  </span>
                </div>
                <div className="main_div d-flex">
                  <h3>
                    <strong className="char_name brand-name">
                      {data.char_name}
                    </strong>
                  </h3>
                </div>
                <div className="main_div">
                  <p align="justify">{data.char_desc}</p>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedInfo;

import React, { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import { useState } from "react";
import { getPirateList } from "../Services/PirateService";
import { useNavigate } from "react-router-dom";
import "../style.css";

const CommonAbout = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fillData = () => {
    getPirateList()
      .then((d) => {
        setData(d.data);
      })
      .catch((ex) => console.log(ex));
  };

  useEffect(() => {
    fillData();
  }, []);

  return (
    <>
      <section id="header" className="align-items-center">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {data.map((i, index) => {
                  return (
                    <Card
                      name={i.char_name}
                      imgSrc={i.char_poster}
                      id={i.char_id}
                    />
                  );
                })}
                <div>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Go back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CommonAbout;

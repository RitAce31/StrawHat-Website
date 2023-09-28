import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Common";
import { getPirateList } from "../Services/PirateService";

const Home = (props) => {
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
      {data.map((i, index) => {
        return (
          <Common
            id={i.char_id}
            name={i.char_name}
            goal={i.char_desc}
            position={i.char_pos}
            imgSrc={i.char_img}
            poster={i.char_poster}
            onDelete={() => {
              console.log(
                "this function will be called when member will be deleted"
              );
              fillData();
            }}
          />
        );
      })}
    </>
  );
};
export default Home;

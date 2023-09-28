import React from "react";
import { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../style.css";
import { addPirate, addPirateDetail } from "../Services/PirateService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Contact = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultObj = {
    char_id: 0,
    char_name: "",
    char_desc: "",
    char_pos: "",
    char_img: "",
    char_poster: "",
  };

  const defaultDetailObj = {
    char_id: 0,
    char_name: "",
    char_bounty: "",
    char_img: "",
    char_fruitname: "",
    char_desc: "",
  };

  const [detailObj, setDetailObj] = useState(defaultDetailObj);
  const [obj, setObj] = useState(defaultObj);

  const onPopupSave = () => {
    setIsOpen(false);
    console.log(detailObj);
  };

  const onButtonClick = () => {
    console.log(obj);
    addPirate(obj).then((d) => {
      let temp = JSON.parse(d.data);
      alert(temp.RETURN_MESSAGE);
      console.log(temp);
      if (temp.CODE == 200) {
        setObj(defaultObj);
        let apiObj = JSON.parse(JSON.stringify(detailObj));
        apiObj.char_id = parseInt(temp.RETURN_VALUE);
        addPirateDetail(apiObj)
          .then((res) => {
            let temp = JSON.parse(res.data);
            alert(temp.RETURN_MESSAGE);
          })
          .catch((ex) => console.log(ex));
      }
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Requirement</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {/* <form> */}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.char_name}
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                onChange={(e) => {
                  setObj((prev) => {
                    return {
                      ...prev,
                      char_name: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Description</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.char_desc}
                aria-describedby="emailHelp"
                placeholder="Why you want to join crew?"
                onChange={(e) =>
                  setObj((prev) => {
                    return {
                      ...prev,
                      char_desc: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Position</label>
              <input
                type="text"
                className="form-control"
                value={obj.char_pos}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="What kind of talent you have?"
                onChange={(e) =>
                  setObj((prev) => {
                    return {
                      ...prev,
                      char_pos: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Image Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.char_img}
                aria-describedby="emailHelp"
                placeholder="Image url"
                onChange={(e) =>
                  setObj((prev) => {
                    return {
                      ...prev,
                      char_img: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Bounty Poster</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.char_poster}
                aria-describedby="emailHelp"
                placeholder="Enter bounty poster URL"
                onChange={(e) => {
                  setObj((prev) => {
                    return {
                      ...prev,
                      char_poster: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="form-check addmore">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Add more...
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onButtonClick}
            >
              Submit
            </button>
            {/* </form> */}
          </div>
        </div>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add more details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={detailObj.char_name}
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setDetailObj((prev) => {
                      return {
                        ...prev,
                        char_name: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Bounty</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={detailObj.char_bounty}
                  aria-describedby="emailHelp"
                  placeholder="Enter your bounty"
                  onChange={(e) => {
                    setDetailObj((prev) => {
                      return {
                        ...prev,
                        char_bounty: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Image Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={detailObj.char_img}
                  aria-describedby="emailHelp"
                  placeholder="Image URL"
                  onChange={(e) => {
                    setDetailObj((prev) => {
                      return {
                        ...prev,
                        char_img: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Devil fruitname</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={detailObj.char_fruitname}
                  aria-describedby="emailHelp"
                  placeholder="Enter devil fruitname"
                  onChange={(e) => {
                    setDetailObj((prev) => {
                      return {
                        ...prev,
                        char_fruitname: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={detailObj.char_desc}
                  aria-describedby="emailHelp"
                  placeholder="describe your self"
                  onChange={(e) => {
                    setDetailObj((prev) => ({
                      ...prev,
                      char_desc: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-check addmore">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onPopupSave}
                >
                  Save
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Contact;

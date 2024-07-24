import React, { useState } from "react";
import { Button, message } from "antd";
import InputType from "./../Form/InputType";
import axios from "axios";
const Modal2 = ({ getData }) => {
  const [show, setShow] = useState(false);
  const [inventoryType, setinventoryType] = useState("in");
  const [quantity, setQuantity] = useState(0);
  const [bloodGroup, setbloodGroup] = useState("");
  const [email, setEmail] = useState("");
  let EMAIL = localStorage.getItem("email");
  let ID = localStorage.getItem("ID");
  let c;
  let d;
  if (EMAIL) {
    c = EMAIL;
  }
  if (ID) {
    d = ID;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/inventory/create-inventory",
        {
          email,
          inventoryType,
          bloodGroup,
          quantity,
          organisation: d,
        }
      );
      if (data?.success) {
        message.success(data.message);
      } else {
        message.error(data?.message);
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  return (
    <>
      <Button
        type="primary"
        className="text-xl p-4 MODAL"
        onClick={() => setShow(!show)}
      >
        {getData}
      </Button>
      {show && (
        <>
          <div
            className="card flex justify-center items-center m-auto shadow-2xl max-[654px]: w-full CARD max-[450px]: max-w-96"
            style={{
              width: "20rem",
              boxShadow: 2,
              height: "22rem",
            }}
          >
            <div className="card-body">
              <h5 className="card-title md:text-xl text-[15px] text-center  font-bold">
                Manage Record
              </h5>
              <form onSubmit={handleSubmit}>
                <span className="flex ">
                  <h1>Blood:</h1>
                  <div className="form-check md:ms-3 ms-2">
                    <input
                      type="radio"
                      name="inRadio"
                      defaultChecked
                      value={"in"}
                      onChange={(e) => setinventoryType(e.target.value)}
                      className="form-check-input"
                    />
                    <label htmlFor="in" className="form-check-label">
                      IN
                    </label>
                  </div>
                  <div className="form-check ms-3">
                    <input
                      type="radio"
                      name="inRadio"
                      value={"out"}
                      onChange={(e) => setinventoryType(e.target.value)}
                      className="form-check-input"
                    />
                    <label htmlFor="out" className="form-check-label">
                      OUT
                    </label>
                  </div>
                </span>
                <br />
                <div>
                  <select
                    className="form-select md:pb-0 "
                    aria-label="Default select example"
                    onChange={(e) => setbloodGroup(e.target.value)}
                    style={{ width: 250 }}
                  >
                    <option defaultValue={"Open this select menu"}>
                      Open this select menu
                    </option>
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"AB-"}>AB-</option>
                    <option value={"A+"}>A+</option>
                    <option value={"A-"}>A-</option>
                    <option value={"B+"}>B+</option>
                    <option value={"B-"}>B-</option>
                  </select>
                </div>
                <InputType
                  labelText={"Donar Email"}
                  labelFor={"donarEmail"}
                  inputType={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={"Quanitity (ML)"}
                  labelFor={"quantity"}
                  inputType={"Number"}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal2;

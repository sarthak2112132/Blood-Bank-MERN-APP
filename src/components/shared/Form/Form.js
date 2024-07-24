import React, { useState } from "react";
import InputType from "./InputType";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleRegister, handleLogin } from "../../../services/authServices";
const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <form
      onSubmit={(e) => {
        if (formType === "register")
          return handleRegister(
            e,
            role,
            name,
            email,
            password,
            organisationName,
            hospitalName,
            website,
            address,
            phone
          );
        else if (formType === "login")
          return handleLogin(e, email, password, role);
      }}
    >
      <h1 className="text-center lg:text-2xl text-xl lg:pb-3 ">{formTitle}</h1>
      <hr />
      <div className="d-flex mb-3">
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"donar"}
            onChange={(e) => setRole(e.target.value)}
            defaultChecked
          />
          <label htmlFor="adminRadio" className="form-check-label">
            Donar
          </label>
        </div>
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="adminRadio" className="form-check-label">
            Admin
          </label>
        </div>
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"hospital"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="hospitalRadio" className="form-check-label">
            Hospital
          </label>
        </div>
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"organisation"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="organisationRadio" className="form-check-label">
            Organisation
          </label>
        </div>
      </div>
      {/* switch statement */}
      {(() => {
        //eslint-disable-next-line
        switch (true) {
          case formType === "login": {
            return (
              <>
                <InputType
                  labelText={"Email"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={"Password"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            );
          }
          case formType === "register": {
            return (
              <>
                {(role === "donar" || role === "admin") && (
                  <InputType
                    labelText={`Name`}
                    inputType={`text`}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                {role === "organisation" && (
                  <InputType
                    labelText={`OrganisationName`}
                    inputType={`text`}
                    name={"organisationName"}
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                  />
                )}
                {role === "hospital" && (
                  <InputType
                    labelText={`HospitalName`}
                    inputType={`text`}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />
                )}
                <InputType
                  labelText={`Email`}
                  inputType={`email`}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={`Password`}
                  inputType={`password`}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <InputType
                  labelText={`Website`}
                  inputType={`text`}
                  name={"website"}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <InputType
                  labelText={`Address`}
                  inputType={`text`}
                  name={"address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <InputType
                  labelText={`Phone`}
                  inputType={`text`}
                  name={"phone"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            );
          }
        }
      })()}

      <div className="d-flex flex-row justify-content-between">
        {formType === "login" ? (
          <>
            <p>
              Not registerd yet ? Register
              <button className="btn btn-primary btn-sm">
                <Link to="/register"> Here !</Link>
              </button>
            </p>
          </>
        ) : (
          <p>
            Already User Please
            <button className="btn btn-success btn-sm">
              <Link to="/login"> Login !</Link>
            </button>
          </p>
        )}
        <br />
      </div>
      <button className="btn btn-primary" type="submit">
        {submitBtn}
      </button>
    </form>
  );
};

export default Form;

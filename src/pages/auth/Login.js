import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row ">
          <div className="col-md-8 form-banner">
            <img src="./images/banner1.jpg" alt="LoginImage" />
          </div>
          <div className="col-md-4 form-container LOGIN ">
            <Form
              formTitle={`Login Page`}
              submitBtn={`Login`}
              className="input"
              formType={`login`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

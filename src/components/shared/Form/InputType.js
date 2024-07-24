import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-1 pb-2 ">
        <div>
          <h1 className=" text-xl pb-2 ">{labelText}</h1>
        </div>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          style={{ width: 270, padding: 6 }}
        />
      </div>
    </>
  );
};

export default InputType;

import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import axios from "axios";
import moment from "moment";
const Organisation = () => {
  const [Data, setData] = useState([]);
  const ID = localStorage.getItem("ID");
  const role = localStorage.getItem("role");
  let f, r;
  if (ID) {
    f = ID;
  }
  if (role) {
    r = role;
  }
  const getData = async () => {
    try {
      if (role === "donar") {
        const { data } = await axios.post(
          "http://localhost:8000/api/inventory/get-organisation",
          {
            donar: ID,
          }
        );
        console.log(data);
        if (data?.success) {
          console.log(data);
          setData(data?.user);
        }
      }
      if (role === "hospital") {
        const { data } = await axios.post(
          "http://localhost:8000/api/inventory/get-inventory-for-hospital",
          {
            hospital: ID,
          }
        );
        console.log(data);
        if (data?.success) {
          console.log(data);
          setData(data?.user);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <table className="table TABLE ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {Data?.map((record) => {
            return (
              <>
                <tr key={record._id}>
                  <td>{record.organisationName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Organisation;

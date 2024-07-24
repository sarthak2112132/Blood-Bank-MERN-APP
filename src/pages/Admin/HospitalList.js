import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";

import API from "../../services/API";
import moment from "moment";
const HospitalList = () => {
  const [hospital, setHospital] = useState([]);

  const getHospitalList = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      if (data?.success) {
        setHospital(data?.hospitalData);
      }
    } catch (error) {}
  };
  const handelDelete = async (id) => {
    try {
      let answer = window.prompt(
        "Are You Sure Want To Delete This Donar",
        "Sure"
      );
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-donar/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHospitalList();
  }, []);
  return (
    <Layout>
      <table className="table TABLE">
        <thead className="THEAD">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {hospital?.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organisationName + " (ORG)"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handelDelete(record._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default HospitalList;

import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import axios from "axios";
import moment from "moment";
const Donar = () => {
  const [Data, setData] = useState([]);
  const ID = localStorage.getItem("ID");
  let f;
  if (ID) {
    f = ID;
  }
  const getData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/inventory/get-donors",
        {
          organisation: f,
        }
      );
      if (data?.success) {
        setData(data?.user);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <table className="table TABLE">
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
                  <td>{record.name || record.organisationName + "ORG"}</td>
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

export default Donar;

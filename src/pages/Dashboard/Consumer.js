import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import axios from "axios";
import moment from "moment";
const Consumer = () => {
  const [Data, setData] = useState([]);
  const ID = localStorage.getItem("ID");
  let f;
  if (ID) {
    f = ID;
  }
  const getData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/inventory/get-inventory-hospital",
        {
          filters: {
            inventoryType: "out",
            hospital: f,
          },
        }
      );
      if (data?.success) {
        setData(data?.inventory);
      }
      console.log(Data);
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
            <th scope="col">BloodGroup</th>
            <th scope="col">InventoryType</th>
            <th scope="col">Quantity</th>
            <th scope="col">DonarEmail</th>
            <th scope="col">Time&Date</th>
          </tr>
        </thead>
        <tbody>
          {Data?.map((record) => {
            return (
              <>
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity} (ML)</td>
                  <td>{record.email}</td>
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

export default Consumer;

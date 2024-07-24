import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import axios from "axios";
import moment from "moment";
const Analytics = () => {
  const [BData, setBData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  const ID = localStorage.getItem("ID");
  let i;
  if (ID) {
    i = ID;
  }

  const getBloodGroupData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/analytics/bloodGroup-data",
        {
          organisation: i,
        }
      );
      if (data?.success) {
        setBData(data?.bloodGroupData);
        console.log(BData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodGroupData();
  }, []);
  const getBloodRecords = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/inventory/get-recent-inventory",
        {
          organisation: i,
        }
      );
      console.log(data);
      if (data?.success) {
        setInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <div>
      <Header />
      <div className="d-flex flex-row flex-wrap ">
        {BData?.map((record, i) => {
          return (
            <>
              <div
                className="card m-2 lg:m-8 p-1 "
                style={{ width: "16rem", backgroundColor: `${colors[i]}` }}
              >
                <div className="card-body">
                  <h1 className="card-title bg-light text-dark text-center text-2xl font-bold">
                    {record.bloodGroup}
                  </h1>
                  <p className="card-text px-2">
                    Total In :<b>{record?.totalIn}</b>(ML)
                  </p>
                  <p className="card-text px-2">
                    Total Out :<b>{record?.totalOut}</b> (ML)
                  </p>
                </div>
                <div className="card-footer text-white bg-dark text-center text-light">
                  Total Available : {record?.availableQuantityOfBlood} (ML)
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="container my-3">
        <h1 className="my-3 text-center font-bold lg:text-xl text-[15px]">
          Recent Blood Transactions
        </h1>
        <table className="table TABLE">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;

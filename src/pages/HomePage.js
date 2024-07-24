import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal2 from "../components/shared/modal/Modal2";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const ID = localStorage.getItem("ID");
  const role = localStorage.getItem("role");
  let e, h;
  if (ID) {
    e = ID;
  }
  if (role) {
    h = role;
  }
  const getAllBloodRecords = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/inventory/get-inventory/${e}`
      );
      if (data?.success) {
        setData(data?.getInventory);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllBloodRecords();
  }, []);
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div>
        {role === "admin" && navigate("/admin")}
        {error && <span>{alert(error)}</span>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h2 className="text-xl " style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-plus text-success py-4"></i>
              <Modal2 getData={`Add Inventory`} />
            </h2>
            <table className="table  lg:w-full TABLE">
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
                          {moment(record.createdAt).format(
                            "DD/MM/YYYY hh:mm A"
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;

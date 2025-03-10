import React from "react";
import { userMenu } from "./Menu/userMenu";
import { Link, useLocation } from "react-router-dom";
import "../../../styles/Layout.css";
const SideBar = () => {
  const location = useLocation();

  const role = localStorage.getItem("role");
  return (
    <div className="sidebar">
      <div className="menu">
        {role === "organisation" && (
          <>
            <div
              className={`menu-item ${location.pathname === "/" && "active"} `}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/">Inventory</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/donar" && "active"
              } `}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/donar">Donar</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/hospital" && "active"
              } `}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/hospital">Hospital</Link>
            </div>
          </>
        )}
        {(role === "donar" || role === "hospital") && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/organisation" && "active"
              } `}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/organisation">Organisation</Link>
            </div>
          </>
        )}
        {role === "hospital" && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              } `}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          </>
        )}
        {role === "donar" && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              } `}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/donation">Donation</Link>
            </div>
          </>
        )}

        {role === "admin" && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/donar-list" && "active"
              } `}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/donar-list">Donar List</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/hospital-list" && "active"
              } `}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/hospital-list">Hospital List</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/org-list" && "active"
              } `}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/org-list">Organisation List</Link>
            </div>
          </>
        )}
        {/* {userMenu.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <>
              <div className={`menu-item ${isActive && "active"}`}>
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            </>
          );
        })} */}
      </div>
    </div>
  );
};

export default SideBar;

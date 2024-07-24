import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { message, Button } from "antd";
const Header = () => {
  const location = useLocation();
  const data = localStorage.getItem("user");
  const data1 = localStorage.getItem("role");
  let a;
  let b;
  if (data) {
    a = data;
  }
  if (data1) {
    b = data1;
  }
  const navigate = useNavigate();
  const [nav, setnav] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    message.success("LogOut SuccessFully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar  NAVBAR">
        <div className="container-fluid">
          <div className="navbar-brand flex justify-end bg-black">
            <BiDonateBlood className="" color="red" size={30} />
            Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link flex ">
                <BiUserCircle size={25} />
                <span className="pl-2 pr-2">Welcome {a}</span>
                <span className="badge bg-secondary">{b}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item mx-3" onClick={handleLogout}>
              <button className="btn btn-danger ">LogOut </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="  justify-between hidden Navbar">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  flex pr-6 ">
          <BiDonateBlood color="red" size={40} /> Blood Bank{" "}
        </h1>
        <div onClick={() => setnav(!nav)} className="cursor-pointer OUTLINE">
          <AiOutlineMenu size={40} color="" />
        </div>
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[250px] h-[650px] bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setnav(!nav)}
          size={30}
          className="absolute right-4 top-6 cursor-pointer"
        />
        <nav>
          <ul className="navbar-nav  flex ">
            <li className="nav-item py-6">
              <p className="flex ">
                <BiUserCircle size={25} />
                <span className="text-bold pl-2 lg:pl-1 font-bold text-[10px] pt-2 lg:pt-0">
                  Welcome {a}
                </span>
                <span className="badge bg-secondary">{b}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link
                  to="/analytics"
                  className=" btn-lg bg-green-400 rounded-md m-2 text-2xl text-bold px-4 py-0"
                >
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="px-2 py-2">
                <Link
                  to="/"
                  className=" btn-lg bg-blue-400 rounded-md m-2 text-2xl text-bold px-4 py-2"
                >
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item  py-6 pl-3 px-4">
              <button className="btn btn-danger btn-lg" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;

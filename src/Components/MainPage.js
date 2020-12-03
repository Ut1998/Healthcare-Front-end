import React, { Component } from "react";
import { Link } from "react-router-dom";
import health1 from "./health1.jpg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a
            className="navbar-brand"
            style={{ color: "white", fontSize: "30px" }}
          >
            Admin
          </a>
          <form className="form-inline">
            <Link
              className="nav-link text-black mr-5"
              to="/addCenter"
              style={{ color: "white", fontSize: "25px" }}
            >
              Add Center
            </Link>
            <Link
              className="nav-link mr-5"
              to="/centerlist"
              style={{ color: "white", fontSize: "25px" }}
            >
              View Centers
            </Link>
            <Link
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Add Test
            </Link>
            <Link
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              View Tests
            </Link>
            <Link
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              View Appointments
            </Link>
          </form>
        </nav>
        <img src={health1} height="682px" width="1535px" />
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import { Link } from "react-router-dom";
import health3 from "./health3.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <h1
            class="navbar-brand"
            style={{
              fontFamily: "ARIAL",
              fontWeight: "bold",
              fontSize: 30,
              width: "500px",
              color: "white",
              backgroundColor: "#00adb5",
              borderRadius: "15px",
            }}
          >
            HealthCare Management System
          </h1>
          <form class="form-inline">
            <button
              class="btn btn-primary mr-sm-2"
              type="submit"
              style={{ color: "white", fontSize: 20 }}
            >
              SignUp
            </button>
            <button class="btn btn-success my-2 my-sm-0" onClick={this.onClick}>
              <Link to="/login" style={{ color: "white", fontSize: 20 }}>
                Log In
              </Link>
            </button>
          </form>
        </nav>
        <img src={health3} height="650px" width="1550px" />
        <FooterComponent />
      </div>
    );
  }
}

export default Home;

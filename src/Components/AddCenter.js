import React, { Component } from "react";
import { Link } from "react-router-dom";
import DiagnosticCenterService from "../Services/DiagnosticCenterService";

class AddCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contactNo: "",
      contactEmail: "",
      address: "",
      servicesOffered: "",
      resp: "",
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  onInputChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  saveEmployee = (event) => {
    event.preventDefault();
    let diagnosticCenter = {
      id: this.state.id,
      name: this.state.name,
      contactNo: this.state.contactNo,
      address: this.state.address,
      contactEmail: this.state.contactEmail,
      servicesOffered: this.state.servicesOffered,
    };
    console.log("diagnosticCenter => " + JSON.stringify(diagnosticCenter));

    const { history } = this.props;
    DiagnosticCenterService.addDiagnosticCenter(diagnosticCenter).then(
      (res) => {
        history.push("/centerlist");
      }
    );
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <h1>Add Center</h1>
                <form onSubmit={this.saveEmployee}>
                  <div className="form-group">
                    <label> Center Name: </label>
                    <input
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Contact Number: </label>
                    <input
                      name="contactNo"
                      className="form-control"
                      value={this.state.contactNo}
                      onChange={this.onInputChangeHandler}
                      required="true"
                    />
                  </div>

                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      name="contactEmail"
                      className="form-control"
                      value={this.state.contactEmail}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Services Offered: </label>
                    <input
                      name="servicesOffered"
                      className="form-control"
                      value={this.state.servicesOffered}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={this.saveEmployee}
                  >
                    Add Test
                  </button>
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={this.saveEmployee}
                    style={{ marginLeft: "10px" }}
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    <Link to="/mainpage" style={{ color: "white" }}>
                      Cancel
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCenter;

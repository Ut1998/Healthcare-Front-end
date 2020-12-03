import React, { Component } from "react";
import DiagnosticCenterService from "../Services/DiagnosticCenterService";
import { Link, withRouter } from "react-router-dom";

class ListCenters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      centers: [],
    };
    this.updateCenter = this.updateCenter.bind(this);
    this.deleteCenter = this.deleteCenter.bind(this);
  }

  componentDidMount() {
    DiagnosticCenterService.viewAllCenters().then((res) => {
      this.setState({ centers: res.data });
    });
  }

  updateCenter = (centerId) => {
    this.props.history.push(`/updatecenter/${centerId}`);
  };

  deleteCenter = (centerId) => {
    DiagnosticCenterService.deleteDiagnosticCenter(centerId).then((res) => {
      this.setState({
        centers: this.state.centers.filter(
          (center) => center.centerId !== centerId
        ),
      });
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Diagnostic Center List</h1>
        <div className="row"></div>
        <table>
          <tr>
            <td>
              <button className="btn btn-primary my-1">
                <Link to="/addcenter" style={{ color: "white" }}>
                  Add Center
                </Link>
              </button>
            </td>
          </tr>
        </table>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>DiagnosticCenter Name</th>
              <th>DiagnosticCenter Contact</th>
              <th>DiagnosticCenter Address</th>
              <th>DiagnosticCenter Email</th>
              <th>Service offered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.centers.map((center) => (
              <tr key={center.centerId}>
                <td>{center.name}</td>
                <td>{center.contactNo}</td>
                <td>{center.address}</td>
                <td>{center.contactEmail}</td>
                <td>{center.servicesOffered}</td>
                <td>
                  <button
                    onClick={() => this.updateCenter(center.centerId)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => this.deleteCenter(center.centerId)}
                    className="btn btn-danger ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(ListCenters);

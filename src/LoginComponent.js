// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class LoginComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       role: "Patient",
//       isSubmitting: false,
//       errorMessage: null,
//     };
//     // this.openMainPage = this.openMainPage.bind(this);
//   }

//   handleInputChange = (event) => {
//     this.setState({
//       ...this.state,
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleFormSubmit = (event) => {
//     this.setState({
//       ...this.state,
//       isSubmitting: true,
//       errorMessage: null,
//     });
//   };

//   // openMainPage = (event) => {
//   //   this.props.history.push("/mainpage");
//   // };

//   render() {
//     return (
//       <div className="login-container">
//         <div className="container">
//           <form onSubmit={this.handleFormSubmit}>
//             <table>
//               <h1>Login</h1>
//               <tr>
//                 <label htmlFor="username">
//                   <td>Username</td>
//                   <td>
//                     <input
//                       type="text"
//                       value={this.state.username}
//                       onChange={this.handleInputChange}
//                       name="username"
//                       id="username"
//                     />
//                   </td>
//                 </label>
//               </tr>
//               <tr>
//                 <label htmlFor="password">
//                   <td>Password</td>
//                   <td>
//                     <input
//                       type="password"
//                       value={this.state.password}
//                       onChange={this.handleInputChange}
//                       name="password"
//                       id="password"
//                     />
//                   </td>
//                 </label>
//               </tr>
//               <tr>
//                 <label html for="role">
//                   <td>Role</td>
//                   <td>
//                     <input
//                       type="radio"
//                       name="role"
//                       id="role"
//                       value={this.state.role}
//                       onChange={this.handleInputChange}
//                     />
//                     Patient
//                   </td>
//                   <td>
//                     <input
//                       type="radio"
//                       name="role"
//                       id="role"
//                       value={this.state.role}
//                       onChange={this.handleInputChange}
//                     />
//                     Admin
//                   </td>
//                 </label>
//               </tr>
//               {this.state.errorMessage && (
//                 <span className="form-error">{this.state.errorMessage}</span>
//               )}
//               <button value="submit" id="login" onClick={this.openMainPage}>
//                 <Link to="mainpage">Login</Link>
//               </button>
//             </table>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginComponent;

import React, { Component } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: {},
      // errors: {},
      userName: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    Axios.get(
      `http://localhost:8080/login/signIn/${this.state.userName}/${this.state.password}`
    )
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("userName", res.data.userName);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Login Page</h1>
          <br />
          <form onSubmit={this.onSubmit}>
            <label>UserName</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              className="form-control"
              placeholder="Enter your username"
              onChange={this.changeHandler}
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />

            <label>Password</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              className="form-control"
              placeholder="Enter your password"
              onChange={this.changeHandler}
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />

            <label>Role</label>
            <input
              type="text"
              className="form-control"
              placeholder="User/Admin"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <br />
            <td>
              <button className="btn btn-info mr-2" value="submit" id="login">
                <Link to="/mainpage" style={{ color: "white" }}>
                  Login
                </Link>
              </button>
            </td>
            {/* <td>
            <input type="submit" className="btn btn-info mr-2" value="Send" />
          </td> */}
            <td>
              <input type="reset" className="btn btn-danger" value="Cancel" />
            </td>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginComponent;

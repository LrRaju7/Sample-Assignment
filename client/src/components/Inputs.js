//IMPORTING PACKAGES
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

//IMPORTING COMPONENT FILES
import Input from "./Input";

//CLASS BASED COMPONENT
class Inputs extends Component {
  //DEFINING THE STATE
  state = {
    inputValues: [],
    loading: false,
  };

  //LIFECYCLE METHOD TO MODIFY THE STATES
  async componentDidMount() {
    this.setState({
      loading: true,
    });

    //MAKING API REQUEST
    const res = await axios.get("http://localhost:4000/api/inputs");

    //DEFINING THE STATES UPON RESPONSE FROM THE SERVER
    this.setState({
      inputValues: res.data,
      loading: false,
    });

    //CONSOLE LOGGING THE VALUES
    console.log(this.state.inputValues);
  }

  render() {
    return (
      <div className="container">
        <div className="mx-3 my-3">
          <Link
            to={"/dashboard"}
            className="btn btn-info btn-block"
            style={{ width: "25%" }}
          >
            Go to Search
          </Link>
        </div>
        <h3>Showing all input values</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">Value</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <Input
            inputValues={this.state.inputValues}
            loading={this.state.loading}
          />
        </table>
        <Link
          onClick={() => {
            localStorage.clear();
            return <Redirect to={"/"} />;
          }}
          to={"/"}
          className="btn btn-danger btn-block mt-5"
          style={{ width: "25%" }}
        >
          Logout
        </Link>
      </div>
    );
  }
}

export default Inputs;

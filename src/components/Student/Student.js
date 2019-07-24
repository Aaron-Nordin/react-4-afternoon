import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentinfo: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        this.setState({
          studentinfo: results.data
        });
      });
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentinfo.first_name} {this.state.studentinfo.last_name}</h1>
        <h3>Grade: {this.state.studentinfo.grade}</h3>
        <h3>Email: {this.state.studentinfo.email}</h3>
      </div>
    );
  }
}

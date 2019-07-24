import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  render() {
    const students = this.state.students.map((s, i) => (
      <Link to={`/student/${s.id}`} key={i}>
        <h3>
          {s.first_name} {s.last_name}
        </h3>
      </Link>
    ));

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}

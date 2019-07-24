import React, { Component } from 'react';
import axios from "axios"

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentinfo: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
      </div>
    )
  }
}
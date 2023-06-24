import React, { Component } from 'react'
import pfp from "../user.png"

export default class Preview extends Component {
  render() {
    return (
      <div className="bruh">
        <div className='preview-div'>
            <div className="bar">
              <div className="name">{this.props.fname} {this.props.lname}</div>
              <div className="field">Software Developer</div>
            </div>
            <div className="content">
              <div className="lhs">
                <div className="education-info">
                  <h5>Education</h5>
                  <div className="linebreak2"></div>
                  <div className="edu-content">
                    <div className="edu-lhs">2023-2024</div>
                    <div className="edu-rhs">
                      <div className="clg-name">MIT-WPU</div>
                      <div className="degree">B-Tech CSE</div>
                    </div>
                  </div>
                </div>
                <div className="work-info">
                  <h5>Work Experience</h5>
                    <div className="linebreak2"></div>
                    <div className="work-content">
                      <div className="work-lhs">SDE-3</div>
                      <div className="work-rhs">
                        <div className="company-name">Amazon Inc</div>
                        <div className="tech">Nodejs, MongoDB</div>
                        <div className="time">4 years</div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="rhs">
                  <div className="pfp">
                      <img src={pfp} alt="" />
                  </div>
                  <h4>Personal Details</h4>
                  <div className="personal-details">
                      <div className="address">
                          <div className='add-title'>Address</div>
                          <p id='interior'>Deez Nuts, 72nd Street, North Av.</p>
                      </div>
                      <div className="phone">
                          <div className="phone-title">Phone Number</div>
                          <p id='interior'>{this.props.phno}</p>
                      </div>
                      <div className="email">
                          <div className="email-title">Email Address</div>
                          <p id='interior'>{this.props.email}</p>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <button className='btn btn-dark' onClick={this.props.previewHandler}>Edit Resume</button>
      </div>
    )
  }
}

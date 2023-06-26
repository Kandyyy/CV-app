import React, { Component } from 'react'
import pfp from "../user.png"

export default class Preview extends Component {

  render() {
    let {previewHandler, fname, lname, email, phno, educationInfo, workInfo} = this.props;
    return (
      <div className="bruh">
        <div className='preview-div'>
            <div className="bar">
              <div className="name">{fname} {lname}</div>
              <div className="field">Software Developer</div>
            </div>
            <div className="content">
              <div className="lhs">
                <div className="education-info">
                  <h5>Education</h5>
                  <div className="linebreak2"></div>
                  <div className="edu-content">
                    <ul>
                      {(educationInfo.length > 0)?educationInfo.map((obj)=>{
                        return(
                          <li>
                            <div className="edu-lhs">{obj.sdate.slice(0,4)} - {obj.edate.slice(0,4)}</div>
                            <div className="edu-rhs">
                              <div className="clg-name">{obj.schoolname}</div>
                              <div className="degree">{obj.degree}</div>
                            </div>
                          </li>
                        )
                      }):console.log("bruh")}
                    </ul>
                  </div>
                </div>
                <div className="work-info">
                  <h5>Work Experience</h5>
                    <div className="linebreak2"></div>
                    <div className="work-content">
                      <ul>
                        {(workInfo.length > 0)?workInfo.map((obj)=>{
                          return(
                            <li>
                              <div className="work-lhs">{obj.title}</div>
                              <div className="work-rhs">
                                <div className="company-name">{obj.companyname}</div>
                                <div className="tech">{obj.skills}</div>
                                <div className="time">{obj.experience}</div>
                              </div>
                            </li>
                          )
                        }):console.log("bruh2")}
                      </ul>
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
                          <p id='interior'>{phno}</p>
                      </div>
                      <div className="email">
                          <div className="email-title">Email Address</div>
                          <p id='interior'>{email}</p>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <button className='btn btn-dark' onClick={previewHandler}>Edit Resume</button>
      </div>
    )
  }
}

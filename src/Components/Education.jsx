import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.EduFormHandler}>
          <div className="form" id='education-form'>
              <div className="row">
                  <div className="col">
                      <label htmlFor="sname" className="form-label">School Name</label>
                      <input type="text" className="form-control" id='sname' placeholder='TheBestSchool' name='schoolname'/>
                  </div>
                  <div className="col">
                      <label htmlFor="qualification" className="form-label">Qualification</label>
                      <input type="text" className="form-control" id='qualification' placeholder='Masters/Bachlors' name='degree'/>
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                      <label htmlFor="dstart" className="form-label">Course Start date</label>
                      <input type="date" className="form-control" id='dstart' name='sdate'/>
                  </div>
                  <div className="col">
                      <label htmlFor="dend" className="form-label">Course End date</label>
                      <input type="date" className="form-control" id='dend' name='edate'/>
                  </div>
              </div>
              <button className="btn btn-dark" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Education;
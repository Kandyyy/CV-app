import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div>
        <div className="form" id='education-form'>
            <div className="row">
                <div className="col">
                    <label htmlFor="sname" className="form-label">School Name</label>
                    <input type="text" className="form-control" id='sname' placeholder='TheBestSchool'/>
                </div>
                <div className="col">
                    <label htmlFor="qualification" className="form-label">Qualification</label>
                    <input type="text" className="form-control" id='qualification' placeholder='Masters/Bachlors'/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="dstart" className="form-label">Course Start date</label>
                    <input type="date" className="form-control" id='dstart'/>
                </div>
                <div className="col">
                    <label htmlFor="dend" className="form-label">Course End date</label>
                    <input type="date" className="form-control" id='dend'/>
                </div>
            </div>
            <button className="btn btn-dark" onClick={this.props.eduHandlerNegate}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Education;
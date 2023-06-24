import React, { Component } from 'react'

class Work extends Component {
  render() {
    return (
        <div>
            <div className="form" id='work-form'>
                <div className="row">
                    <div className="col">
                        <label htmlFor="cname" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id='cname' placeholder='TheBestCompany'/> 
                    </div>
                    <div className="col">
                        <label htmlFor="title" className="form-label">Job Title</label>
                        <input type="text" className="form-control" id='title' placeholder='Senior Web Developer'/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="expertise" className="form-label">Skilled Areas</label>
                        <input type="text" className="form-control" id='expertise' placeholder='Django, Node, VueJS'/> 
                    </div>
                    <div className="col">
                        <label htmlFor="yoe" className="form-label">Experience</label>
                        <input type="text" className="form-control" id='yoe' placeholder='7.5 YOE'/> 
                    </div>
                </div>
                <button className="btn btn-dark" onClick={this.props.workHandlerNegate}>Submit</button>
            </div>
        </div>
    )
  }
}

export default Work;
import React, { Component } from 'react'

class Work extends Component {
  render() {
    return (
        <div>
            <form onSubmit={this.props.WorkFormHandler}>
                <div className="form" id='work-form'>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="cname" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id='work-inp' placeholder='TheBestCompany' name='companyname'/> 
                        </div>
                        <div className="col">
                            <label htmlFor="title" className="form-label">Job Title</label>
                            <input type="text" className="form-control" id='work-inp' placeholder='Senior Web Developer' name='title'/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="expertise" className="form-label">Skilled Areas</label>
                            <input type="text" className="form-control" id='work-inp' placeholder='Django, Node, VueJS' name='skills'/> 
                        </div>
                        <div className="col">
                            <label htmlFor="yoe" className="form-label">Experience</label>
                            <input type="text" className="form-control" id='work-inp' placeholder='7.5 YOE' name='experience'/> 
                        </div>
                    </div>
                    <button className="btn btn-dark" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
  }
}

export default Work;